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
    this.tasksService.updatedTaskboard$.subscribe(() => {
      if(this.tasksService.taskBoards[0].length === 0) {
        this.boards = [];
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.boardsInput.currentValue.length > 0 && changes.boardsInput.currentValue !== changes.boardsInput) {

      this.boards = this.boardsInput.map(item => {
        if(item) {
          return { id: item.id, name: item.name, active: false };
        }
      });

      if (this.boards && this.boards.length > 0) {
        const checkActiveItem = this.boards.filter((item) => {
            return item.active === true;
        });

        if (checkActiveItem.length === 0) {
          this.boards[0].active = true;

          if(this.tasksService.boardId) {
            this.setActiveBoard(this.tasksService.boardId);
          } else {
            this.setActiveBoard(this.boards[0].id);
          }
        }
      } else {
        this.boards[0].active = true;
      }
    }
  }

  setActiveBoard(id: string) {
    this.tasksService.setActiveBoard(id);
    for (let i = 0; i < this.boards.length; i++) {
      let boardItem = this.boards[i];
      if(boardItem.id === id) {
        boardItem.active = true;
      } else {
        boardItem.active = false;
      }
    }
  }

}
