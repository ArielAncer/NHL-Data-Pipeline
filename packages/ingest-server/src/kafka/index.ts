import { Kafka } from 'kafkajs';
import { config } from '../config';

const { client_id, host, port } = config.message_broker;

export const kafka = new Kafka({
  clientId: client_id,
  brokers: [`${host}:${port}`]
});
