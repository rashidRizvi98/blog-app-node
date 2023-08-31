import  express, { Express } from 'express';
import { getLogger } from "./helpers/logger";
import { port } from './config/config';

const logger = getLogger('SERVER');
const app: Express = express();

app.get('/',(req,res) => {
    res.send("Hello World");
})

app.listen(port, () => {
    logger.info(`Server is listening at: ${port}`);
})