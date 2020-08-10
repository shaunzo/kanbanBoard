import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskBoardComponent } from './add-task-board.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ModalService } from '../../modal/services/modal.service';
import { ModalComponent } from '../../modal/modal.component';
import { spyOnClass } from 'jasmine-es6-spies';
import { TasksService } from '../services/tasks.service';

describe('AddTaskBoardComponent', () => {
  let component: AddTaskBoardComponent;
  let fixture: ComponentFixture<AddTaskBoardComponent>;
  let modalService: jasmine.SpyObj<ModalService>;
  let modalComponent: jasmine.SpyObj<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ AddTaskBoardComponent ],
      providers: [{
        provide: ModalService, useFactory: () => spyOnClass(ModalService)},
        { provide: ModalComponent, useFactory: () => spyOnClass(ModalComponent) }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskBoardComponent);
    component = fixture.componentInstance;
    modalService = TestBed.get(ModalService);
    fixture.detectChanges();
  });

  it('should create', () => {
    // let tasksService = fixture.debugElement.injector.get(TasksService);
    // let modalComponent = fixture.debugElement.injector.get(ModalComponent);
    expect(component).toBeTruthy();
  });
});
