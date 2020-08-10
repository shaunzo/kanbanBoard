import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskBoardComponent } from './task-board/task-board.component';
import { TasksService } from './services/tasks.service';
import { AddTaskBoardComponent } from './add-task-board/add-task-board.component';
import { RemoveTaskBoardComponent } from './remove-task-board/remove-task-board.component';
import { AddTaskColumnComponent } from './task-board/add-task-column/add-task-column.component';
import { ModalService } from '../modal/services/modal.service';



@NgModule({
  declarations: [
    TaskBoardComponent,
    AddTaskBoardComponent,
    RemoveTaskBoardComponent,
    AddTaskColumnComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TaskBoardComponent,
    AddTaskBoardComponent,
    RemoveTaskBoardComponent
  ],
  providers: [
    TasksService,
    ModalService
  ]
})
export class TasksModule { }
