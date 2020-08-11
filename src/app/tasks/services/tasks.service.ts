import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITaskBoard } from '../task-board/interfaces/task-board';
import { IColumn } from '../../tasks/task-board/interfaces/column';
import { of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  closeModal$ = new Subject();
  updatedTaskboard$ = new Subject<any>();
  currentActiveBoardIndex$ = new Subject<number>();
  createdNewBoard$ = new Subject<string>(); // Pass board ID

  currentActiveBoardIndex: number;
  currentTaskBoardData: ITaskBoard;
  taskBoards = [];
  boardId: string;

  constructor( private httpClient: HttpClient ) {
    this.updatedTaskboard$.subscribe((data) => {
      this.taskBoards = [data];
      console.log(data);
    });

    this.createdNewBoard$.subscribe((boardID) => {
      this.setActiveBoard(boardID);
    });

    this.currentActiveBoardIndex$.subscribe(boardIndex => {
      console.log(boardIndex);
      this.currentActiveBoardIndex = boardIndex;

      if (this.taskBoards[this.currentActiveBoardIndex]) {
        this.currentTaskBoardData = {
          id: this.taskBoards[this.currentActiveBoardIndex].id,
          name: this.taskBoards[this.currentActiveBoardIndex].name,
          columns: this.taskBoards[this.currentActiveBoardIndex].columns
        };
      }
    });

  }

  updateTaskboards(data) {
    this.updatedTaskboard$.next(data);
  }

  updateTaskBoard(name, id) {
    const index = this.taskBoards[0].findIndex( (item) => {
      return item.id === id; }
    );
    this.taskBoards[0][index].name = name;
    this.updateTaskboards(this.taskBoards[0]);
  }

  getTaskBoard$() {
    return this.httpClient.get('assets/mock-data/boards.json');
  }

  createTaskBoard(name: string) {
    const board: ITaskBoard = {
      id: new Date().getMilliseconds().toString(),
      name,
      columns: []
    };

    this.taskBoards[0].push(board);
    this.updateTaskboards(this.taskBoards[0]);
    this.boardId = board.id;

    this.createdNewBoard$.next(this.boardId);
  }

  removeTaskBoard(index:number) {
    this.taskBoards[0].splice(index, 1);
    this.updateTaskboards(this.taskBoards[0]);
    this.closeModal$.next();
  }

  createColumn(boardIndex: number, columnName: string ) {
    const column: IColumn  = {
      id: this.generateID(),
      name: columnName,
      tasks: []
    };

    this.taskBoards[0][boardIndex].columns.push(column);
    this.updateTaskboards(this.taskBoards[0]);
    this.closeModal$.next();
  }

  updateColumn(boardIndex: number, columnIndex: number, name: string) {
    this.taskBoards[0][boardIndex].columns[columnIndex].name = name;
    this.updateTaskboards(this.taskBoards[0]);
  }

  removeColumn(boardIndex: number, columnIndex: number) {
    this.taskBoards[0][boardIndex].columns.splice(columnIndex, 1);
    this.updateTaskboards(this.taskBoards[0]);
    this.closeModal$.next();
  }

  setActiveBoard(id: string) {
    let index = null;
    for (let i = 0; i < this.taskBoards[0].length; i++) {
      let item = this.taskBoards[0][i];
      if (item.id === id) {
        index = i;
      }
    }

    this.currentActiveBoardIndex$.next(index);
  }

  generateID() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
  }


}
