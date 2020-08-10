import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ITaskBoard } from '../task-board/interfaces/task-board';
import { TasksService } from '../services/tasks.service';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-add-task-board',
  templateUrl: './add-task-board.component.html',
  styleUrls: ['./add-task-board.component.scss']
})
export class AddTaskBoardComponent implements OnInit {
  addTaskBoardForm: FormGroup;
  registerFormControl: FormGroup;

  constructor(private tasksService: TasksService, private modal: ModalComponent) { }

  ngOnInit(): void {
    this.addTaskBoardForm = new FormGroup({
      name: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    this.modal.submittedForm$.next();
    this.tasksService.createTaskBoard(this.addTaskBoardForm.value.name);
  }

}
