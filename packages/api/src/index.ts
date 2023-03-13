import express from 'express';
import router from './routes';
import swaggerDocs from './swagger';
import { CustomLogger } from '../../common/utilities/logger';
import { NHLDatabase } from '../../common/utilities/postgres';
import { config } from '../config';

NHLDatabase.getInstance(config);
const logger = CustomLogger.getInstance('nhl-api');

const app = express();
const port = 4000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  logger.info(`NHL api listening at http://localhost:${port}`);
  swaggerDocs(app, port);
});
