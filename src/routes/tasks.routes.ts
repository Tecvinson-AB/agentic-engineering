import { Router } from 'express';
import * as tasksController from '../controllers/tasks.controller';

export const tasksRouter = Router();

tasksRouter.get('/', tasksController.list);
tasksRouter.post('/', tasksController.create);
tasksRouter.get('/:id', tasksController.get);
tasksRouter.patch('/:id', tasksController.update);
tasksRouter.delete('/:id', tasksController.remove);
