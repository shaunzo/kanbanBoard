import { Component, OnInit } from '@angular/core';
import { TaskColumnService } from '../task-column/task-column.service';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-delete-column',
  templateUrl: './delete-column.component.html',
  styleUrls: ['./delete-column.component.scss']
})
export class DeleteColumnComponent implements OnInit {

  constructor(private taskColumnService: TaskColumnService, private tasksService: TasksService) { }

  ngOnInit(): void {
  }

  cancel() {
    this.tasksService.closeModal$.next();
  }

  deleteColumn() {
    this.tasksService.removeColumn(this.taskColumnService.boardIndex, this.taskColumnService.columnIndex);
  }

}
