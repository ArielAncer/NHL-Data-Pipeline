interface INHLServiceConfig {
  base_url: string;
  routes: {
    schedule: string;
  };
}

interface IMessageBrokerConfig {
  client_id: string;
  consumer_group_name: string;
  host: string;
  port: number;
}

export interface IDatabaseConfig {
  username: string;
  password: string;
  host: string;
  port: number;
  database: string;
}

export interface IConfig {
  nhl_service: INHLServiceConfig;
  message_broker: IMessageBrokerConfig;
  nhl_data_store: IDatabaseConfig;
  ingest_poll_interval_ms: number;
}
