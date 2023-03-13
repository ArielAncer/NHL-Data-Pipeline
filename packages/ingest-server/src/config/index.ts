import { type IConfig } from '../../../common/interfaces/config';

require('dotenv').config();

const nhlServiceRoutes = {
  schedule: 'v1/schedule'
};

export const config: IConfig = {
  nhl_service: {
    base_url: process.env.NHL_API_BASE_URL,
    routes: nhlServiceRoutes
  },
  nhl_data_store: {
    username: process.env.PG_USER_NAME,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT),
    database: process.env.PG_DATABASE
  },
  message_broker: {
    host: process.env.KAFKA_HOST,
    port: Number(process.env.KAFKA_PORT),
    client_id: process.env.KAFKA_CLIENT_ID,
    consumer_group_name: process.env.KAFKA_CONSUMER_GROUP_NAME
  },
  ingest_poll_interval_ms: Number(process.env.INGEST_POLL_INTERVAL_MS)
};
