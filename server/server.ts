/* eslint-disable @typescript-eslint/no-unused-vars -- Remove when used */
import 'dotenv/config';
import express from 'express';
import pg from 'pg';
import {
  ClientError,
  defaultMiddleware,
  errorMiddleware,
} from './lib/index.js';
import { type Run, validatePost } from './lib/requests.js';

const connectionString =
  process.env.DATABASE_URL ||
  `postgresql://${process.env.RDS_USERNAME}:${process.env.RDS_PASSWORD}@${process.env.RDS_HOSTNAME}:${process.env.RDS_PORT}/${process.env.RDS_DB_NAME}`;
const db = new pg.Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

// Create paths for static directories
const reactStaticDir = new URL('../client/dist', import.meta.url).pathname;
const uploadsStaticDir = new URL('public', import.meta.url).pathname;

app.use(express.static(reactStaticDir));
// Static directory for file uploads server/public/
app.use(express.static(uploadsStaticDir));
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

app.get('/api/runs', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "runs"
        order by "runId" desc;
    `;
    const result = await db.query<Run>(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/runs/:runId', async (req, res, next) => {
  try {
    const { runId } = req.params;
    if (!Number.isInteger(+runId) || +runId < 1)
      throw new ClientError(400, 'runId must be a positive integer');
    const sql = `
      select *
        from "runs"
        where "runId" = $1;
    `;
    const params = [runId];
    const result = await db.query(sql, params);
    const [run] = result.rows;
    if (!run) throw new ClientError(404, `Run ${runId} not found`);
    res.status(200).json(run);
  } catch (err) {
    next(err);
  }
});

app.post('/api/runs', async (req, res, next) => {
  try {
    const userId = 1;
    const { distanceRan, runDuration, averageHeartRate, photoUrl, runDate } =
      req.body;
    validatePost(distanceRan, runDuration, averageHeartRate, photoUrl, runDate);
    const sql = `
      insert into "runs" ("userId", "distanceRan", "runDuration", "averageHeartRate", "photoUrl", "runDate")
        values($1, $2, $3, $4, $5, $6)
        returning *;
    `;
    const params = [
      userId as number,
      distanceRan as string,
      runDuration as string,
      averageHeartRate as string,
      photoUrl as string,
      runDate as string,
    ];
    const result = await db.query<Run>(sql, params);
    const [run] = result.rows;
    res.status(201).json(run);
  } catch (err) {
    next(err);
  }
});

app.put('/api/runs/:runId', async (req, res, next) => {
  try {
    const { runId } = req.params;
    if (!Number.isInteger(+runId) || +runId < 1)
      throw new ClientError(400, 'runId must be a positive integer');
    const { distanceRan, runDuration, averageHeartRate, photoUrl, runDate } =
      req.body;
    validatePost(distanceRan, runDuration, averageHeartRate, photoUrl, runDate);
    const sql = `
      update "runs"
        set "distanceRan" = $1,
            "runDuration" = $2,
            "averageHeartRate" = $3,
            "photoUrl" = $4,
            "runDate" = $5
        where "runId" = $6;
    `;
    const params = [
      distanceRan,
      runDuration,
      averageHeartRate,
      photoUrl,
      runDate,
      runId,
    ];
    await db.query(sql, params);
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/runs', async (req, res, next) => {
  try {
    const { runId } = req.body;
    if (!Number.isInteger(+runId) || +runId < 1)
      throw new ClientError(400, 'runId must be a positive integer');
    const sql = `
      delete
        from "runs"
        where "runId" = $1
        returning *;
    `;
    const params = [runId];
    const result = await db.query(sql, params);
    const [deletedRun] = result.rows;
    if (!deletedRun) throw new ClientError(404, `Run ${runId} not found`);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.use(defaultMiddleware(reactStaticDir));

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
