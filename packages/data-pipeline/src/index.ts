import { CustomLogger } from '../../common/utilities/logger';

const logger = CustomLogger.getInstance('nhl-data-pipeline');

const start = () => {
  logger.info('Data ingest pipeline process started..');

  // To be implemented

  logger.info('Data ingest pipeline process ended..');
};

start();
