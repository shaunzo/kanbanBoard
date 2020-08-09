import { Component, OnInit } from '@angular/core';
import { ITaskBoard } from './tasks/task-board/interfaces/task-board';
import { TasksService } from './tasks/services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  taskBoards:any;

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.getTaskBoards();
  }

  getTaskBoards() {
    this.tasksService.getTaskBoard$().subscribe(res => {
      console.log(res);
      // this.tasksService.updatedTaskboard$.next(res);
    });
  }
}
