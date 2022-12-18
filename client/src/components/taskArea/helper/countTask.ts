import { TaskStatusType } from '../../taskCounter/interfaces/ITaskConuter';
import { ITaskAPI } from '../interfaces/ITaskAPI';
export const countTask = (
  tasks: ITaskAPI[],
  statusType: TaskStatusType,
): number => {
  if (!Array.isArray(tasks)) {
    return 0;
  }
  const statusCount = tasks.filter((task) => task.status === statusType);
  return statusCount.length;
};
