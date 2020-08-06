import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITaskBoard } from './task-board/task-board';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor( private httpClient: HttpClient ) { }

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
