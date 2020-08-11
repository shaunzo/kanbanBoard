import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../../services/tasks.service';
import { TaskColumnService } from '../../../task-board/task-column/task-column.service';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.scss']
})
export class DeleteTaskComponent implements OnInit {

  constructor(private tasksService: TasksService, private taskColumnService: TaskColumnService) { }

  ngOnInit(): void {
  }

  deleteTask() {
    this.tasksService.deleteTask(this.taskColumnService.boardIndex, this.taskColumnService.columnIndex, this.taskColumnService.taskIndex);
    this.tasksService.closeModal$.next();
  }

  cancel() {
    this.tasksService.closeModal$.next();
  }

}
