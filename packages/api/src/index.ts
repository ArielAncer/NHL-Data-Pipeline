import express from "express";
import router from "./routes";
import swaggerDocs from "./swagger";

const app = express();
const port = 4000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`NHL api listening at http://localhost:${port}`);
  swaggerDocs(app, port);
});
