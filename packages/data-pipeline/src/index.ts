import { CustomLogger } from "../../common/utilities/logger";

const logger = new CustomLogger("nhl-data-pipeline").getInstance();

const start = () => {
  logger.info("Data ingest pipeline process started..");

  // To be implemented

  logger.info("Data ingest pipeline process ended..");
};

start();
