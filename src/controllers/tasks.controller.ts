import { Request, Response, NextFunction } from 'express';
import * as tasksService from '../services/tasks.service';

export function list(_req: Request, res: Response): void {
  res.json(tasksService.listTasks());
}

export function get(req: Request, res: Response, next: NextFunction): void {
  try {
    res.json(tasksService.getTask(req.params.id));
  } catch (err) {
    next(err);
  }
}

export function create(req: Request, res: Response): void {
  const { title } = req.body;
  const task = tasksService.createTask({ title });
  res.status(201).json(task);
}

export function update(req: Request, res: Response, next: NextFunction): void {
  try {
    const task = tasksService.updateTask(req.params.id, req.body);
    res.json(task);
  } catch (err) {
    next(err);
  }
}

export function remove(req: Request, res: Response, next: NextFunction): void {
  try {
    tasksService.deleteTask(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}
