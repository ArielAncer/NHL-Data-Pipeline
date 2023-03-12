# NHL-Data-Pipeline

A CDC ingest pipeline monorepo that pulls and stores NHL data

## Packages

### Api

Api to expose RESTful routes that allow for read only access of NHL data.
See documentation [here](packages/api/README.md)

### Ingest Server

Change data capture ingest pipeline that pulls data from an external api and publishes it to
a relational data store. See documentation [here](packages/data-pipeline/README.md)

### Common

Shared interfaces, enums, models and utilities between packages.

## Technologies ( Shared )

- Docker
- NodeJS
- TypeScript
- PostGres

### Code Management

- Lerna
- Husky
- ESLint
- Prettier
- Lint-Staged

### Testing

- Jest

### Debug

- Winston

## Architectural Decisions

- See the following [index](arch-decisions/index.md)

## Local Development

### Requirements

- Yarn package management installed on machine
- Docker installed on machine & Docker daemon running

### Instructions

- Run `yarn` and then run `yarn dev`
