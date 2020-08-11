import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';
import { ModalComponent } from '../../../modal/modal.component';

@Component({
  selector: 'app-add-task-column',
  templateUrl: './add-task-column.component.html',
  styleUrls: ['./add-task-column.component.scss']
})
export class AddTaskColumnComponent implements OnInit {
  addColumnForm: FormGroup;
  registerFormControl: FormGroup;

  constructor(private tasksService: TasksService, private modal: ModalComponent) { }

  ngOnInit(): void {
    this.addColumnForm = new FormGroup({
      name: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    this.modal.submittedForm$.next();
    this.tasksService.createColumn(this.tasksService.currentActiveBoardIndex, this.addColumnForm.value.name);
  }

}
