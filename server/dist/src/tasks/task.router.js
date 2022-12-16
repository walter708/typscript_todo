'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.taskRouter = void 0;
const express_1 = require('express');
const task_controller_1 = require('./task.controller');
// The router module helps us create a new router
/** Fire up a new router using Router */
exports.taskRouter = (0, express_1.Router)();
exports.taskRouter.get('/tasks', (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const taskController = new task_controller_1.TaskController();
    const allTask = yield taskController.getAll();
    res.json(allTask).status(200);
  }),
);
