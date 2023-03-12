import { dpLogger } from '..';
import { consumer } from '../kafka/brokers/consumer';

export class IngestionConsumer {
  _topic: string;

  constructor(topic: string) {
    this._topic = topic;
  }

  init = async () => {
    await this._consumeData(this._topic).catch(dpLogger.error);
  };

  _consumeData = async (topic: string): Promise<void> => {
    await consumer.connect();
    dpLogger.info(`Kafka consumer for topic ${topic} connected`);

    await consumer.subscribe({ topic, fromBeginning: true });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        // [TODO] save downstream data to postGres database

        dpLogger.info(
          JSON.stringify({
            partition,
            offset: message.offset,
            value: message.value.toString()
          })
        );
      }
    });
  };
}
