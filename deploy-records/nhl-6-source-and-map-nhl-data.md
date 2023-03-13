## NHL-6 Source And Map NHL Data

### Description

As an Engineer
I would like to sink game stats data to the database
So that a user can query for the data on demand

### Notes

- Adds an environment variable named `ALWAYS_INGEST_FG`
  - **For Testing Purposes Only:** If set to `true`, the ingest process will run regardless of game status changes

### Technical Notes

- Set up basic read operations via the api at Swagger page http://localhost:4000/docs/

### Resources

- None
