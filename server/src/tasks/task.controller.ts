import { Task } from './task.entities';
import { AppDataSource } from '../..';
import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

class TaskController {
  // Get Task Controller
  public async getAll(req: Request, res: Response): Promise<Response> {
    // create a variable that hold the values
    let allTask: Task[];
    // fetch the tasks
    try {
      allTask = await AppDataSource.getRepository(Task).find({
        order: {
          date: 'ASC',
        },
      });
      // Convert the all of task instance to array of objects
      allTask = instanceToPlain(allTask) as Task[];
      return res.json(allTask).status(200);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  // Post controller
  public async create(req: Request, res: Response): Promise<Response> {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({
        errors: error.array(),
      });
    }

    // Create an instance of Task
    const newTask = new Task();
    // Populate the instance with properties from client
    newTask.title = req.body.title;
    newTask.date = req.body.date;
    newTask.description = req.body.description;
    newTask.priority = req.body.priority;
    newTask.status = req.body.status;
    //save the instance in the database with the help of typorm
    let createTask: Task;
    try {
      createTask = await AppDataSource.getRepository(Task).save(newTask);
      createTask = instanceToPlain(createTask) as Task;
      return res.json(createTask).status(201);
    } catch (error) {
      return res.json({ error: 'Internal Sever Error' });
    }
  }
}

export const taskController = new TaskController();
