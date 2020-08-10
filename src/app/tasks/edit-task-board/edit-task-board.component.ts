import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TasksService } from '../services/tasks.service';
import { ModalComponent } from '../../modal/modal.component';
import { ITaskBoard } from '../../tasks/task-board/interfaces/task-board';

@Component({
  selector: 'app-edit-task-board',
  templateUrl: './edit-task-board.component.html',
  styleUrls: ['./edit-task-board.component.scss']
})
export class EditTaskBoardComponent implements OnInit {
  editTaskBoardForm: FormGroup;
  registerFormControl: FormGroup;
  currentBoard: ITaskBoard;
  boards: ITaskBoard[];
  index: number;
  boardTitle:string;

  constructor(private tasksService: TasksService, private modal: ModalComponent) {
    this.index = this.tasksService.currentActiveBoardIndex;
    this.boards = this.tasksService.taskBoards;
    this.currentBoard = this.boards[0][this.index];
    this.boardTitle = this.currentBoard.name;
   }

  ngOnInit(): void {
    this.currentBoard = this.getformData();
    this.editTaskBoardForm = new FormGroup({
      name: new FormControl(this.boardTitle, Validators.required)
    });
  }

  getformData() {
    return this.tasksService.currentTaskBoardData;
  }

  onSubmit() {
    this.modal.submittedForm$.next();
    this.tasksService.createTaskBoard(this.editTaskBoardForm.value.name);
  }

}
