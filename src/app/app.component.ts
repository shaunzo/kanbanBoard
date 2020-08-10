import { Component, OnInit } from '@angular/core';
import { ITaskBoard } from './tasks/task-board/interfaces/task-board';
import { TasksService } from './tasks/services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  taskBoards = [];

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.getTaskBoards();
    this.setTaskboards();
  }

  setTaskboards() {
    this.tasksService.updatedTaskboard$.subscribe((data) => {
      this.taskBoards = data;
    });
  }

  getTaskBoards() {
    this.tasksService.getTaskBoard$().subscribe(res => {
      this.tasksService.updateTaskboards(res);
    });
  }
}
