import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/services/modal.service';
import { TaskBoardComponent } from '../tasks/task-board/task-board.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private modal: ModalService) { }

  ngOnInit(): void {
  }

  addTaskBoard() {
    const ref = this.modal.open(TaskBoardComponent , null, 400);
    ref.afterClosed$.subscribe(res => {
      console.log(res);
    });
  }

  removeTaskBoard() {
    console.log('Removed Task Board');
  }

}
