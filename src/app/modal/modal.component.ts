import { Component, OnInit, TemplateRef, Type, ViewChild, ElementRef, Injector, ReflectiveInjector, Injectable } from '@angular/core';
import { ModalOverlayRef } from './modalOverlayRef';
import { RemoveTaskBoardService } from '../tasks/services/remove-task-board.service';
import { TasksService } from '../tasks/services/tasks.service';

import { Subject } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  submittedForm$ = new Subject<any>();

  contentType: 'template' | 'string' | 'component';
  content: string | TemplateRef<any> | Type<any>;
  context;
  myInjector: Injector;

  constructor(private ref: ModalOverlayRef, private removeTaskBoard: RemoveTaskBoardService, private tasksService: TasksService) {
  }

  ngOnInit(): void {

    this.content = this.ref.content;

    if(typeof this.content === 'string') {
      this.contentType = 'string';
    } else if (this.content instanceof TemplateRef) {
      this.contentType = 'template';
      this.context = {
        close: this.ref.close.bind(this.ref)
      };
    } else {
      this.contentType = 'component';
    }

    this.submittedForm$.subscribe(() => {
      this.close();
    });

    this.tasksService.closeModal$.subscribe(() => {
      this.close();
    });

    this.removeTaskBoard.cancelledDelete$.subscribe(() => {
      this.close();
    });
  }

  close() {
    this.ref.close(null);
  }

}
