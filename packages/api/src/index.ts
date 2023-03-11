import express from "express";
import router from "./routes";
import swaggerDocs from "./swagger";
import { CustomLogger } from "../../common/utilities/logger";

const logger = new CustomLogger("nhl-api").getInstance();

const app = express();
const port = 4000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  logger.info(`NHL api listening at http://localhost:${port}`);
  swaggerDocs(app, port);
});
