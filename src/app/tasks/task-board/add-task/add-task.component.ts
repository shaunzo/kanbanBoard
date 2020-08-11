import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';
import { ModalComponent } from '../../../modal/modal.component';
import { TaskColumnService } from '../task-column/task-column.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  addTaskForm: FormGroup;
  registerFormControl: FormGroup;

  boardIndex: number;
  columnIndex: number;
  taskIndex: number;
  title: string;
  description: string;

  constructor(private tasksService: TasksService, private modal: ModalComponent, private taskColumnService: TaskColumnService) { }

  ngOnInit(): void {

    this.addTaskForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required)
    });

    this.boardIndex = this.taskColumnService.boardIndex;
    this.columnIndex = this.taskColumnService.columnIndex;
  }

  onSubmit() {
    this.modal.submittedForm$.next();
    this.tasksService.createTask(this.boardIndex, this.columnIndex, this.addTaskForm.value.title, this.addTaskForm.value.description);

    console.log('Description:', this.addTaskForm.value.description, 'Title:', this.addTaskForm.value.title);
    console.log('BoardIndex:', this.taskColumnService.boardIndex, 'ColumnIndex:', this.taskColumnService.columnIndex);
    console.log('TaskIndex:', this.taskColumnService.taskIndex);
  }

}
