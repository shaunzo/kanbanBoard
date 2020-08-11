import { Component, OnInit } from '@angular/core';
import { ITaskBoard  } from './interfaces/task-board';
import { AddTaskBoardComponent } from '../add-task-board/add-task-board.component';
import { ModalService } from '../../modal/services/modal.service';
import { TasksService } from '../services/tasks.service';
import { IColumn } from './interfaces/column';
import { ITask } from './interfaces/task';
import { AddTaskColumnComponent } from './add-task-column/add-task-column.component';
import { DeleteTaskComponent } from './task-column/delete-task/delete-task.component';
import { EditTaskComponent } from './task-column/edit-task/edit-task.component';
import { TaskColumnService } from '../task-board/task-column/task-column.service';

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
  tasks: ITask[];

  currentTaskBoardData: ITaskBoard;

  constructor( private modal: ModalService, private tasksService: TasksService, private taskColumnService: TaskColumnService) { }

  ngOnInit(): void {
    this.getTaskBoards();

    this.tasksService.currentActiveBoardIndex$.subscribe(boardIndex => {

      this.currentActiveBoardIndex = boardIndex | 0;

      this.currentTaskBoardData = {
        id: this.taskBoards[this.currentActiveBoardIndex].id,
        name: this.taskBoards[this.currentActiveBoardIndex].name,
        columns: this.taskBoards[this.currentActiveBoardIndex].columns
      };

      this.columns = this.currentTaskBoardData.columns;

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

  editTask(taskId: number, columnIndex: number) {
    this.taskColumnService.taskIndex = taskId;
    this.taskColumnService.columnIndex = columnIndex;
    const ref = this.modal.open(EditTaskComponent , null, 400);
    ref.afterClosed$.subscribe(res => {
      console.log(res);
    });
  }

  deleteTask(taskId: number, columnIndex: number) {
    this.taskColumnService.taskIndex = taskId;
    this.taskColumnService.columnIndex = columnIndex;
    const ref = this.modal.open(DeleteTaskComponent , null, 500);
    ref.afterClosed$.subscribe(res => {
      console.log(res);
    });
  }

}
