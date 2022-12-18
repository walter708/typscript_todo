import { Status } from './../../createTaskForm/enums/Status';
import { Priority } from './../../../../../server/src/enums/Priority';
export interface ITaskAPI {
  id: string;
  title?: string;
  description?: string;
  date: string;
  priority?: `${Priority}`;
  status?: `${Status}`;
}
