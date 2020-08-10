import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { BoardsComponent } from './boards/boards.component';
import { TasksService } from '../tasks/services/tasks.service';



@NgModule({
  declarations: [
    MenuComponent,
    BoardsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent
  ],
  providers: [
    TasksService
  ]
})
export class MenuModule { }
