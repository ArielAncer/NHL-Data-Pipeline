import { dpLogger } from '..';
import { producer } from '../kafka/brokers/producer';
import { delay } from '../../../common/utilities/delay';
import { config } from '../config';

const INGEST_POLL_MS = config.ingest_poll_delay_ms;

export class IngestionProducer {
  constructor() {}
  init = async (topic: string) => {
    while (true) {
      // [TODO] pull data from NHL Service for schedule
      // [TODO] save raw data to PostGres

      const statusChangeData = [{ message: 'sample-status-data' }];

      if (statusChangeData.length) {
        // [TODO] look for game status changes
        const hasStatusChanges = true;

        if (hasStatusChanges) {
          // [TODO] get game data from NHLService
          const sampleData = [{ message: 'sample-nhl-data' }];
          // [TODO] establish topics per data type if required
          await produceData(topic, sampleData);
        }
      }

      await delay(INGEST_POLL_MS);
    }
  };
}

const getKafkaMessage: any = (item) => {
  return {
    value: Buffer.from(JSON.stringify(item))
  };
};

const produceData = async (topic: string, data: any[]): Promise<void> => {
  await producer.connect();
  dpLogger.info('Kafka producer connected');

  for (const item of data) {
    const message = getKafkaMessage(item);
    await producer.send({
      topic,
      messages: [message]
    });
    dpLogger.info(`Message ${message.value} sent to Kafka Topic ${topic}`);
  }

  await producer.disconnect();
  dpLogger.info('Kafka producer disconnected');
};
