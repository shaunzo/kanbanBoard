import { Component, OnInit } from '@angular/core';
import { ITaskBoard } from '../tasks/task-board/task-board';
import { OverlayService } from '../overlay.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private modal: OverlayService) { }

  ngOnInit(): void {
  }

  addTaskBoard() {

    const ref = this.modal.open('This is a string modal test' , null, 400);

    ref.afterClosed$.subscribe(res => {
      console.log(res);
    });
  }

  removeTaskBoard() {
    console.log('Removed Task Board');
  }

}
