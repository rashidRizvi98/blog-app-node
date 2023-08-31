import  express, { Express } from 'express';
import cors from 'cors';
import { getLogger } from "./helpers/logger";
import { fe_url, port } from './config/config';
import userRouter from './routes/user-route';
import { HttpError } from './helpers/custom-error';
import { initializeDatabase } from './database/database';

const logger = getLogger('SERVER');
const app: Express = express();

app.use(cors({
    origin: fe_url
  }));

app.get('/',(req,res) => {
    res.send("Hello World");
});

app.use(express.json())

app.use("/users",userRouter);


app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (err instanceof HttpError) {
      res.status(err.statusCode).json({ message: err.message });
    } else {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
);

initializeDatabase();

app.listen(port, () => {
    logger.info(`Server is listening at: ${port}`);
})