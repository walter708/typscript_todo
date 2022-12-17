import { Status } from '../../createTaskForm/enums/Status';
import { TaskStatusType } from '../interfaces/ITaskConuter';
export const emmitCorrectBorderColor = (status: TaskStatusType): string => {
  switch (status) {
    case Status.Todo:
      return 'error.light';
    case Status.Completed:
      return 'success.light';
    case Status.InProgress:
      return 'warning.light';
  }
};
