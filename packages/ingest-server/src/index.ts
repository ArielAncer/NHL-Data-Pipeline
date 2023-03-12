import { CustomLogger } from '../../common/utilities/logger';
import { IngestionConsumer } from './controllers/IngestionConsumer';
import { IngestionProducer } from './controllers/IngestionProducer';

export const dpLogger = CustomLogger.getInstance('nhl-data-pipeline');

const ingestConsumer = new IngestionConsumer();
const ingestProducer = new IngestionProducer();

const start = async () => {
  dpLogger.info('Data ingest pipeline process started..');

  const topic = 'nhl-player-data';
  await ingestConsumer.init(topic).catch(dpLogger.error);
  await ingestProducer.init(topic).catch(dpLogger.error);

  dpLogger.info('Data ingest pipeline process ended..');
};

void start();
