import { Component, OnInit } from '@angular/core';
import { ITaskBoard  } from './interfaces/task-board';
import { AddTaskBoardComponent } from '../add-task-board/add-task-board.component';
import { ModalService } from '../../modal/services/modal.service';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent implements OnInit {

  taskBoards:ITaskBoard[] = [];

  constructor( private modal: ModalService) { }

  ngOnInit(): void {
  }

  addTaskBoard() {
    this.modal.open(AddTaskBoardComponent, null, 400);
  }

}
