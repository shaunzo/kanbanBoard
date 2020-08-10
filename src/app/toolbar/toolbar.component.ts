import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/services/modal.service';
import { AddTaskBoardComponent } from '../tasks/add-task-board/add-task-board.component';
import { RemoveTaskBoardComponent } from '../tasks/remove-task-board/remove-task-board.component';
import { EditTaskBoardComponent } from '../tasks/edit-task-board/edit-task-board.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  test: any
  constructor(private modal: ModalService) { }

  ngOnInit(): void {
  }

  addTaskBoard() {
    const ref = this.modal.open(AddTaskBoardComponent , null, 400);
    ref.afterClosed$.subscribe(res => {
      console.log(res);
    });
  }

  removeTaskBoard() {
    const ref = this.modal.open(RemoveTaskBoardComponent , null, 400);
    ref.afterClosed$.subscribe(res => {
    });
  }


  editTaskBoard() {
    const ref = this.modal.open(EditTaskBoardComponent , null, 400);
    ref.afterClosed$.subscribe(res => {
    });
  }


}
