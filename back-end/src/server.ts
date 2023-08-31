import  express, { Express } from 'express';
import cors from 'cors';
import { getLogger } from "./helpers/logger";
import { fe_url, port } from './config/config';

const logger = getLogger('SERVER');
const app: Express = express();

app.use(cors({
    origin: fe_url
  }));

app.get('/',(req,res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    logger.info(`Server is listening at: ${port}`);
})