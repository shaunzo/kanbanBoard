import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITaskBoard } from '../task-board/interfaces/task-board';
import { of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  updatedTaskboard$ = new Subject<any>();

  constructor( private httpClient: HttpClient ) {
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


}
