set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."users" (
  "userId" serial PRIMARY KEY,
  "username" text NOT NULL,
  "password" text NOT NULL,
  "created_at" timestamptz(6) NOT NULL DEFAULT now()
);

CREATE TABLE "public"."runs" (
  "runId" serial PRIMARY KEY,
  "userId" integer NOT NULL,
  "distanceRan" text NOT NULL,
  "runDuration" integer NOT NULL,
  "averageHeartRate" integer NOT NULL,
  "runDate" text NOT NULL,
  "photoUrl" text NOT NULL,
  "createdAt" timestamptz(6) NOT NULL DEFAULT now()
);

ALTER TABLE ONLY "public"."runs"
  ADD CONSTRAINT user_id_fkey FOREIGN KEY ("userId") REFERENCES "public"."users"("userId") ON UPDATE CASCADE ON DELETE RESTRICT;
