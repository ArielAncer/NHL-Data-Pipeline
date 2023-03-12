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

export interface IConfig {
  nhl_service: INHLServiceConfig;
  message_broker: IMessageBrokerConfig;
  ingest_poll_interval_ms: number;
}
