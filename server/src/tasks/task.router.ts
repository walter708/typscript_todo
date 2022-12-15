import { Request, Response, Router } from 'express';

// The router module helps us create a new router

/** Fire up a new router using Router */

export const taskRouter: Router = Router();

taskRouter.get('/task', (req: Request, res: Response) => {
  res.send('Express + Typescript server');
});
