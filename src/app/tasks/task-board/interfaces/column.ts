import { ITask } from './task';

export interface IColumn {
  id: string;
  name: string;
  tasks?: ITask[];
}
