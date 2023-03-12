# NHL Ingest Server

Change data capture ingest pipeline that pulls data from an external api and publishes it to
a relational data store

## Technologies

- Axios
- Kafka

## Local Development

### Requirements

- Yarn package management installed on machine
- Docker installed on machine & Docker daemon running

### Instructions

- From the top-level directory
- Install packages:
  - Run `yarn`
- Run `cd packages/ingest-server`
- **\*NB\*** Start the Kafka server:
  - Run `yarn dc:up`
- Intiate ingestion process:
  - Run `yarn dev`
