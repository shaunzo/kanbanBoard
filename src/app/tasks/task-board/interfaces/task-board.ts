import { IColumn } from './column';

export interface ITaskBoard {
  id: string;
  name: string;
  columns?: IColumn[];
}
