import { body, ValidationChain } from 'express-validator';
import { Priority } from '../enums/Priority';
import { Status } from '../enums/Status';

export const createValidator: ValidationChain[] = [
  body('title')
    .not()
    .isEmpty()
    .withMessage('This task title is mandatory')
    .trim()
    .isString()
    .withMessage('This field must be a string '),
  body('date')
    .not()
    .isEmpty()
    .withMessage('The task date is mandatory')
    .isString()
    .withMessage('The date needs to be a valid data format'),
  body('description')
    .trim()
    .isString()
    .withMessage('Description needs to be in text format'),
  body('priority')
    .trim()
    .isIn([Priority.High, Priority.Medium, Priority.Low])
    .withMessage('priority can only be Medium, High, or low'),

  body('status')
    .trim()
    .isIn([Status.Completed, Status.InProgress, Status.Todo])
    .withMessage('status can only be completed, in progress, or todo'),
];

export const updataValidator = [
  body('id')
    .not()
    .isEmpty()
    .withMessage('The id is mandatory')
    .trim()
    .isString()
    .withMessage('ID must be a valid uuid string'),
  body('status')
    .trim()
    .isIn([Status.Completed, Status.InProgress, Status.Todo])
    .withMessage('Status can only be completed, in progress, or todo'),
];
