import { Status } from "../../createTaskForm/enums/Status"
import { TaskStatusType } from "../interfaces/ITaskConuter"
export const emmitCorrectLabel = (status:TaskStatusType):string => {
  switch(status){
    case Status.Todo:
      return `Todo's`
    case Status.Completed:
      return 'Completed'
    case Status.Inprogress:
      return 'In Progress'
  }
}