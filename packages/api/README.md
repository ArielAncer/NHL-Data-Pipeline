# NHL Api

Api to expose RESTful routes that allow for read only access of NHL data

## Technologies used

- Express
- Swagger Docs

## Swagger

- Accessible when running at http://localhost:4000/docs/

### Available Routes

- GET: `/api/healthcheck`
- GET: `/api/games`
  - Query Params:
    - `game_id`
  - Returns all games if no param specified
- GET: `/api/teams`
  - Query Params:
    - `team_id`
  - Returns all teams if no param specified
- GET: `/api/players`
  - Query Params:
    - `player_id`
  - Returns all players if no param specified
- GET: `/api/playerStats`
  - Query Params:
    - `player_id`
    - **and/or** `game_id`
  - Returns all playerStats if no param specified
  - Returns all playerStats for game if only game_id specified
  - Returns all playerStats for player if only player_id specified
  - Returns all playerStats for combination of player and game if both ids specified
