import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../../../modal/services/modal.service';
import { AddTaskComponent } from '../add-task/add-task.component';
import { EditColumnComponent } from '../edit-column/edit-column.component';
import { DeleteColumnComponent } from '..//delete-column/delete-column.component';
import { ITask } from '../interfaces/task';
import {  TasksService } from '../../services/tasks.service';
import {TaskColumnService } from './task-column.service';

@Component({
  selector: 'app-task-column',
  templateUrl: './task-column.component.html',
  styleUrls: ['./task-column.component.scss']
})
export class TaskColumnComponent implements OnInit {
  @Input() columnName: string;
  @Input() index: string;
  @Input() tasks: ITask[];

  constructor(private modal: ModalService, private tasksService: TasksService, private taskColumnService: TaskColumnService) { }

  ngOnInit(): void {
  }

  addTask() {
    const ref = this.modal.open(AddTaskComponent  , null, 400);
    ref.afterClosed$.subscribe(res => {
      console.log(res);
    });
  }

  editColumn(index) {
    this.taskColumnService.columnIndex = index;
    const ref = this.modal.open(EditColumnComponent  , null, 400);
    ref.afterClosed$.subscribe(res => {
      console.log(res);
    });
  }

  deleteColumn(index) {
    this.taskColumnService.columnIndex = index;
    console.log('Column index:', index);
    const ref = this.modal.open(DeleteColumnComponent  , null, 500);
    ref.afterClosed$.subscribe(res => {
      console.log(res);
    });
  }

}
