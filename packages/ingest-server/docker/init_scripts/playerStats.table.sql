CREATE TABLE PlayerStats (
  player_id INTEGER,
  game_id INTEGER,
  penalty_minutes INTEGER,
  assists INTEGER,
  goals INTEGER,
  hits INTEGER,
  points INTEGER,
  create_dt TIMESTAMP DEFAULT NOW(),
  modified_dt TIMESTAMP DEFAULT NOW(),
  UNIQUE(game_id, player_id)
)