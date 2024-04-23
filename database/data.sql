-- Use SQL insert statements to add any
-- starting/dummy data to your database tables

-- EXAMPLE:

--  insert into "todos"
--    ("task", "isCompleted")
--    values
--      ('Learn to code', false),
--      ('Build projects', false),
--      ('Get a job', false);

insert into "users" ("username", "password")
  values('guest', '$argon2id$v=19$m=4096,t=3,p=1$/AOCb+P7RhZkckMGMp6BLQ$ONQhbw8xKxy6RKm2FBVqXotVxOkJMLaZWufH4DwfWsc');
