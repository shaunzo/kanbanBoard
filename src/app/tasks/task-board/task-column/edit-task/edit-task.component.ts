import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TasksService } from '../../../services/tasks.service';
import { ModalComponent } from '../../../../modal/modal.component';
import { TaskColumnService } from '../../task-column/task-column.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  editTaskForm: FormGroup;
  registerFormControl: FormGroup;

  boardIndex: number;
  columnIndex: number;
  taskIndex: number;
  title: string;
  description: string;

  constructor(private tasksService: TasksService, private modal: ModalComponent, private taskColumnService: TaskColumnService) { }

  ngOnInit(): void {

    this.boardIndex = this.taskColumnService.boardIndex;
    this.columnIndex = this.taskColumnService.columnIndex;
    this.taskIndex = this.taskColumnService.taskIndex;

    const currentData = this.tasksService.taskBoards[0][this.boardIndex].columns[this.columnIndex].tasks[this.taskIndex];

    this.editTaskForm = new FormGroup({
      title: new FormControl(currentData.name, Validators.required),
      description: new FormControl(currentData.description, Validators.required)
    });


  }

  onSubmit() {
    this.modal.submittedForm$.next();
    this.tasksService.updateTask(this.boardIndex, this.columnIndex, this.taskIndex, this.editTaskForm.value.title, this.editTaskForm.value.description);
  }

}
