CREATE DATABASE TS_api_db;

CREATE TABLE users(
  id SERIAL PRIMARY KEY, 
  name VARCHAR(40),
  email TEXT
);

INSERT INTO users(name, email)
  VALUES ('joe', 'joe@joe.com'),
        ('ryan', 'ryan@ryan.com');