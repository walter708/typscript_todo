// Given that data would be sent to the server as a JSON object every property would be
// a string
export interface ICreateTask {
  title: string;
  description: string;
  date: string;
  priority: string;
  status: string;
}
