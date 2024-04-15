/* eslint-disable @typescript-eslint/no-unused-vars -- Remove when used */
import 'dotenv/config';
import express from 'express';
import pg from 'pg';
import {
  ClientError,
  defaultMiddleware,
  errorMiddleware,
} from './lib/index.js';

type Run = {
  distanceRan: string;
  runDuration: number;
  averageHeartRate: number;
  photoUrl: string;
  runDate: string;
};

const connectionString =
  process.env.DATABASE_URL ||
  `postgresql://${process.env.RDS_USERNAME}:${process.env.RDS_PASSWORD}@${process.env.RDS_HOSTNAME}:${process.env.RDS_PORT}/${process.env.RDS_DB_NAME}`;
const db = new pg.Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

function validatePost(
  distanceRan: Run,
  runDuration: Run,
  averageHeartRate: Run,
  photoUrl: Run,
  runDate: Run
): void {
  if (!Number.isInteger(+runDuration) || !Number.isInteger(+averageHeartRate))
    throw new ClientError(
      400,
      'runDuration and averageHeartRate must be numbers'
    );
  if (!distanceRan || !photoUrl || !runDate)
    throw new ClientError(400, 'All required input fields not completed');
}

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

app.use(defaultMiddleware(reactStaticDir));

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
