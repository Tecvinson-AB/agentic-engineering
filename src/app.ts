import express, { Express } from 'express';
import { tasksRouter } from './routes/tasks.routes';
import { errorHandler } from './middleware/errorHandler';

export function createApp(): Express {
  const app = express();

  app.use(express.json());

  app.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
  });

  app.use('/tasks', tasksRouter);

  app.use(errorHandler);

  return app;
}
