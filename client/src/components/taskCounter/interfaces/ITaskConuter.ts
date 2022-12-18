import { Status } from '../../createTaskForm/enums/Status';

export type TaskStatusType = Status.Todo | Status.InProgress | Status.Completed;
export interface ITaskCounter {
  count?: number | undefined;
  status?: TaskStatusType;
}
