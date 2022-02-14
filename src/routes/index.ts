import express, { NextFunction, Request, Response } from 'express';

import { profilesRouter } from './profiles.routes';

const routes = express.Router();

routes.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send('Hello Idip, we are live!');
});

routes.use('/profiles', profilesRouter);

export { routes };
