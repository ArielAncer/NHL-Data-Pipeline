import { type IConfig } from './interfaces/config.interfaces';

require('dotenv').config();

export const config: IConfig = {
  nhl_service: { base_url: process.env.NHL_API_BASE_URL },
  message_broker: {
    host: process.env.KAFKA_HOST,
    port: Number(process.env.KAFKA_PORT),
    client_id: process.env.KAFKA_CLIENT_ID,
    consumer_group_name: process.env.KAFKA_CONSUMER_GROUP_NAME
  },
  ingest_poll_delay_ms: Number(process.env.INGEST_POLL_DELAY_MS)
};
