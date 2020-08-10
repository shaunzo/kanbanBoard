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

  constructor( private httpClient: HttpClient ) {
    this.updatedTaskboard$.subscribe((data) => {
      this.taskBoards = [data];
    });
  }

  updateTaskboards(data) {
    this.updatedTaskboard$.next(data);
  }

  getTaskBoard$() {
    return this.httpClient.get('assets/mock-data/boards.json');
  }

  createTaskBoard(params: ITaskBoard) {
    const board: ITaskBoard = {
      id: new Date().getMilliseconds().toString(),
      name: params.name
    };
    return of(board);
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
