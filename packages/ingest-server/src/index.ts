import { CustomLogger } from '../../common/utilities/logger';
import { IngestionConsumer } from './controllers/IngestionConsumer';
import { IngestionProcessScheduler } from './controllers/IngestionProcessScheduler.ts';

export const dpLogger = CustomLogger.getInstance('nhl-data-pipeline');

const topic = 'nhl-game-data';
const scheduler = new IngestionProcessScheduler(topic);
const ingestConsumer = new IngestionConsumer(topic);

const start = async () => {
  try {
    dpLogger.info('Data ingest pipeline process started..');

    await scheduler.pollApiForGameStatusChanges();
    await ingestConsumer.init().catch(dpLogger.error);
  } catch (e) {
    dpLogger.error(e.message);
  }
};

void start();
