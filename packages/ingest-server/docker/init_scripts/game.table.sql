CREATE TABLE Games (
  game_id SERIAL PRIMARY KEY,
  opponent_team_id INTEGER,
  assists INTEGER,
  goals INTEGER,
  hits INTEGER,
  points INTEGER,
  penalty_minutes INTEGER,
  create_dt TIMESTAMP DEFAULT NOW(),
  modified_dt TIMESTAMP DEFAULT NOW()
);
