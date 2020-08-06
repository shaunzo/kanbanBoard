import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskBoardComponent } from './task-board/task-board.component';
import { TasksService } from './tasks.service';



@NgModule({
  declarations: [
    TaskBoardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TaskBoardComponent
  ],
  providers: [ TasksService ]
})
export class TasksModule { }
