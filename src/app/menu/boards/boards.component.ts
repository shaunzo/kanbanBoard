import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TasksService } from '../../tasks/services/tasks.service';
import { IBoard } from './interfaces/board';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit, OnChanges {

  @Input() boardsInput: any[] = [];
  boards: IBoard[] = [];

  constructor( private tasksService: TasksService ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.boardsInput.currentValue.length > 0 && changes.boardsInput.currentValue !== changes.boardsInput) {

      this.boards = this.boardsInput.map((item, i) => {
        return { id: item.id, name: item.name, active: false };
      });

      const checkActiveItem = this.boards.filter((item) => {
        return item.active === true;
      });

      if (checkActiveItem.length === 0) {
        this.boards[0].active = true;
      }
    }
  }

  setActiveBoard(id: string) {
    this.tasksService.setActiveBoard(id);
  }

}
