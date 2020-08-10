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

  constructor( private httpClient: HttpClient ) {
    this.updatedTaskboard$.subscribe((data) => {
      this.taskBoards = [data];
    });

    this.createdNewBoard$.subscribe((boardID) => {
      this.setActiveBoard(boardID);
    });
  }

  updateTaskboards(data) {
    this.updatedTaskboard$.next(data);
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
