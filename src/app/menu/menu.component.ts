import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks/services/tasks.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  taskBoards = [];

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.taskService.updatedTaskboard$.subscribe(data => {
      this.taskBoards = data;
    });
  }

}
