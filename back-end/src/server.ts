import  express, { Express } from 'express';
import cors from 'cors';
import { getLogger } from "./helpers/logger";
import { cookieConfig, fe_url, port } from './config/config';
import userRouter from './routes/user-route';
import { HttpError } from './helpers/custom-error';
import { initializeDatabase } from './database/database';
import cookieSession from 'cookie-session';
import { verifyToken } from './middlewares/auth';
import blogRouter from './routes/blog-route';

const logger = getLogger('SERVER');
const app: Express = express();

app.use(cors({
    origin: fe_url
  }));


app.use(express.json());


app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "blog-app-session",
    keys: [cookieConfig.secret],
    httpOnly: true,
  })
);

app.get('/',[verifyToken],(req,res) => {
  res.send("Hello World");
});


app.use("/users",userRouter);

app.use("/blogs",blogRouter);

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