import { Priority } from "../../createTaskForm/enums/Priority";
export const renderPriorityBorderColor = (priority:string):string => {
  switch (priority) {
    case Priority.High:
      return 'error.light'
    case Priority.Medium:
      return 'info.light'
    case Priority.Low:
      return 'grey.900'
    default:
      return 'grey.900'
  }
}