import { Component, OnInit } from '@angular/core';
import { ITaskBoard  } from './interfaces/task-board';
import { AddTaskBoardComponent } from '../add-task-board/add-task-board.component';
import { ModalService } from '../../modal/services/modal.service';
import { TasksService } from '../services/tasks.service';
import { IColumn } from './interfaces/column';
import { AddTaskColumnComponent } from './add-task-column/add-task-column.component';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent implements OnInit {

  currentActiveBoardIndex: number;

  taskBoards: ITaskBoard[] = [];
  title: string;
  columns: IColumn[];

  currentTaskBoardData: ITaskBoard;

  constructor( private modal: ModalService, private tasksService: TasksService) { }

  ngOnInit(): void {
    this.getTaskBoards();

    this.tasksService.currentActiveBoardIndex$.subscribe(boardIndex => {
      this.currentActiveBoardIndex = boardIndex;

      this.currentTaskBoardData = {
        id: this.taskBoards[this.currentActiveBoardIndex].id,
        name: this.taskBoards[this.currentActiveBoardIndex].name,
        columns: this.taskBoards[this.currentActiveBoardIndex].columns
      };

    });

  }

  addTaskBoard() {
    this.modal.open(AddTaskBoardComponent, null, 400);
  }

  getTaskBoards() {
    this.tasksService.updatedTaskboard$.subscribe((data) => {
      this.taskBoards = data;
    });
  }

  addColumn(boardId: number ) {
    const ref = this.modal.open(AddTaskColumnComponent , boardId, 400);
    ref.afterClosed$.subscribe(res => {
      console.log(res);
    });
  }

}
