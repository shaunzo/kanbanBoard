import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITaskBoard } from '../task-board/interfaces/task-board';
import { of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  taskBoards = [];

  updatedTaskboard$ = new Subject<any>();
  currentActiveBoardIndex$ = new Subject<number>();
  createdNewBoard$ = new Subject<string>(); // Pass board ID

  boardId: string;
  currentActiveBoardIndex: number;
  currentTaskBoardData: ITaskBoard;

  constructor( private httpClient: HttpClient ) {
    this.updatedTaskboard$.subscribe((data) => {
      this.taskBoards = [data];
      console.log(data);
    });

    this.createdNewBoard$.subscribe((boardID) => {
      this.setActiveBoard(boardID);
    });

    this.currentActiveBoardIndex$.subscribe(boardIndex => {
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
    console.log(this.taskBoards, name, id);
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


}
