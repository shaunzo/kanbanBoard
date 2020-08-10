import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskBoardComponent } from './task-board/task-board.component';
import { TasksService } from './services/tasks.service';
import { AddTaskBoardComponent } from './add-task-board/add-task-board.component';
import { RemoveTaskBoardComponent } from './remove-task-board/remove-task-board.component';
import { AddTaskColumnComponent } from './task-board/add-task-column/add-task-column.component';
import { ModalService } from '../modal/services/modal.service';
import { TaskColumnComponent } from './task-board/task-column/task-column.component';
import { DeleteColumnComponent } from './task-board/delete-column/delete-column.component';
import { EditColumnComponent } from './task-board/edit-column/edit-column.component';
import { AddTaskComponent } from './task-board/add-task/add-task.component';
import { EditTaskBoardComponent } from './edit-task-board/edit-task-board.component';



@NgModule({
  declarations: [
    TaskBoardComponent,
    AddTaskBoardComponent,
    RemoveTaskBoardComponent,
    AddTaskColumnComponent,
    TaskColumnComponent,
    DeleteColumnComponent,
    EditColumnComponent,
    AddTaskComponent,
    EditTaskBoardComponent
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
