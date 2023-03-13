import { type Consumer } from 'kafkajs';
import { kafka } from '..';
import { config } from '../../config';

const groupId = config.message_broker.consumer_group_name;

export const consumer: Consumer = kafka.consumer({ groupId });
