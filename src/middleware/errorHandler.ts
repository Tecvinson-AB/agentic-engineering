import { Request, Response, NextFunction } from 'express';
import { TaskNotFoundError } from '../services/tasks.service';

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
): void {
  if (err instanceof TaskNotFoundError) {
    res.status(404).json({ error: err.message });
    return;
  }
  res.status(500).json({ error: 'Internal server error' });
}
