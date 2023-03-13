CREATE TABLE Players (
  player_id SERIAL PRIMARY KEY,
  player_name VARCHAR(255),
  player_age  INTEGER,
  player_number INTEGER,
  player_position VARCHAR(255),
  create_dt TIMESTAMP DEFAULT NOW(),
  modified_dt TIMESTAMP DEFAULT NOW()
);
