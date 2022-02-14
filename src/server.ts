import 'dotenv/config';
import 'express-async-errors';

import cors from 'cors';
import express from 'express';

import { errorHandler } from './middlewares/errorHandler';
import { routes } from './routes';

const HOST = process.env.HOST || 'http://localhost';
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));

app.use(routes);

app.use(errorHandler);

app.listen(PORT, () => console.log(`⚡️:Server is running on ${HOST}:${PORT}`));
