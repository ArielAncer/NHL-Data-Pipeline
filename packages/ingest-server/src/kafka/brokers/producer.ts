import { type Producer } from 'kafkajs';
import { kafka } from '..';

export const producer: Producer = kafka.producer();
