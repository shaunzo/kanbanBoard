import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { RemoveTaskBoardService } from '../services/remove-task-board.service';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-remove-task-board',
  templateUrl: './remove-task-board.component.html',
  styleUrls: ['./remove-task-board.component.scss']
})
export class RemoveTaskBoardComponent implements OnInit {

  constructor(private removeTaskBoardService: RemoveTaskBoardService, private tasksService: TasksService) { }

  ngOnInit(): void {
  }

  cancel() {
    this.removeTaskBoardService.cancelledDelete$.next();
  }

  removeRecord() {
    this.tasksService.removeTaskBoard(this.tasksService.currentActiveBoardIndex);
  }

}
