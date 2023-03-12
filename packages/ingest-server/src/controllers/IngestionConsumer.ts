import { dpLogger } from '..';
import { consumer } from '../kafka/brokers/consumer';

export class IngestionConsumer {
  init = async (topic: string) => {
    await this._consumeData(topic).catch(dpLogger.error);
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
