import { Component, OnInit } from '@angular/core';
import { ITaskBoard } from '../tasks/task-board/task-board';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addTaskBoard(params: ITaskBoard ) {
    console.log('Create Task Board');
  }

  removeTaskBoard(id: string) {
    console.log('Removed Task Board');
  }

}
