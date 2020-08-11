import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';
import { TaskColumnService } from '../task-column/task-column.service';
import { ModalComponent } from '../../../modal/modal.component';

@Component({
  selector: 'app-edit-column',
  templateUrl: './edit-column.component.html',
  styleUrls: ['./edit-column.component.scss']
})
export class EditColumnComponent implements OnInit {
  editColumnForm: FormGroup;
  registerFormControl: FormGroup;

  currentName: string = this.tasksService.taskBoards[0][this.taskColumnservice.boardIndex].columns[this.taskColumnservice.columnIndex].name;

  constructor(private tasksService: TasksService, private modal: ModalComponent, private taskColumnservice: TaskColumnService ) {
  }

  ngOnInit(): void {

    this.editColumnForm = new FormGroup({
      name: new FormControl(this.currentName, Validators.required)
    });
  }

  onSubmit() {
    this.modal.submittedForm$.next();
    this.tasksService.updateColumn(this.taskColumnservice.boardIndex, this.taskColumnservice.columnIndex, this.editColumnForm.value.name);
  }

}
