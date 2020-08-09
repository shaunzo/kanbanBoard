import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskBoardComponent } from './task-board/task-board.component';
import { TasksService } from './services/tasks.service';
import { AddTaskBoardComponent } from './add-task-board/add-task-board.component';
import { RemoveTaskBoardComponent } from './remove-task-board/remove-task-board.component';



@NgModule({
  declarations: [
    TaskBoardComponent,
    AddTaskBoardComponent,
    RemoveTaskBoardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TaskBoardComponent,
    AddTaskBoardComponent,
    RemoveTaskBoardComponent
  ],
  providers: [ TasksService ]
})
export class TasksModule { }
