import { Injectable } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Injectable({
  providedIn: 'root'
})
export class TaskColumnService {

  boardIndex: number;
  columnIndex: number;

  constructor(private tasksService: TasksService) {
    this.boardIndex = this.tasksService.currentActiveBoardIndex;
    this.tasksService.currentActiveBoardIndex$.subscribe((data) => {
      this.boardIndex = data;
    });
  }
}
