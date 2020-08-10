import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../../../modal/services/modal.service';
import { AddTaskComponent } from '../add-task/add-task.component';
import { EditColumnComponent } from '../edit-column/edit-column.component';
import { DeleteColumnComponent } from '..//delete-column/delete-column.component';

@Component({
  selector: 'app-task-column',
  templateUrl: './task-column.component.html',
  styleUrls: ['./task-column.component.scss']
})
export class TaskColumnComponent implements OnInit {
  @Input() columnName: string;

  constructor(private modal: ModalService) { }

  ngOnInit(): void {
  }

  addTask() {
    const ref = this.modal.open(AddTaskComponent  , null, 400);
    ref.afterClosed$.subscribe(res => {
      console.log(res);
    });
  }

  editColumn() {
    const ref = this.modal.open(EditColumnComponent  , null, 400);
    ref.afterClosed$.subscribe(res => {
      console.log(res);
    });
  }

  deleteColumn() {
    const ref = this.modal.open(DeleteColumnComponent  , null, 400);
    ref.afterClosed$.subscribe(res => {
      console.log(res);
    });
  }

}
