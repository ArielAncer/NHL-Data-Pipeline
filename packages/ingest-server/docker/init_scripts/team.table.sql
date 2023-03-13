CREATE TABLE Teams (
  team_id SERIAL PRIMARY KEY,
  team_name VARCHAR(255),
  create_dt TIMESTAMP DEFAULT NOW(),
  modified_dt TIMESTAMP DEFAULT NOW()
);