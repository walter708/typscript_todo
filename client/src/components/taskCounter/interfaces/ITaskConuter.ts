import { Status } from "../../createTaskForm/enums/Status"

export type  TaskStatusType = Status.Todo | Status.Inprogress | Status.Completed
export interface ITaskCounter{
  count?:number 
  status?:TaskStatusType
}