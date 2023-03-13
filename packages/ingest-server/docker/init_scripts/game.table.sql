CREATE TABLE Games (
  game_id SERIAL PRIMARY KEY,
  team_id INTEGER,
  opponent_team_id INTEGER,
  create_dt TIMESTAMP DEFAULT NOW(),
  modified_dt TIMESTAMP DEFAULT NOW()
);
