import { Router } from 'express';
import { taskController } from './task.controller';
import { createValidator, updataValidator } from './task.validator';

// The router module helps us create a new router

/** Fire up a new router using Router */

export const taskRouter: Router = Router();

taskRouter.get('/tasks', taskController.getAll);

taskRouter.post('/tasks', createValidator, taskController.create);

taskRouter.put('/tasks', updataValidator, taskController.update);
