"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const task_entities_1 = require("./task.entities");
const __1 = require("../..");
const class_transformer_1 = require("class-transformer");
class TaskController {
    constructor(repository = __1.AppDataSource.getRepository(task_entities_1.Task)) {
        this.repository = repository;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            // create an variable that hold the values
            let allTask;
            // fetch the tasks
            try {
                allTask = yield this.repository.find({
                    order: {
                        date: 'ASC',
                    },
                });
                // Convert the all of task instance to array of objects
                allTask = (0, class_transformer_1.instanceToPlain)(allTask);
                return allTask;
            }
            catch (err) {
                console.error(err);
                return [];
            }
        });
    }
}
exports.TaskController = TaskController;
