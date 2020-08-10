import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { spyOnClass } from 'jasmine-es6-spies';
import { of } from 'rxjs';

import { TaskBoardComponent } from './task-board.component';
import { AddTaskBoardComponent } from '../add-task-board/add-task-board.component';
import { ModalService } from '../../modal/services/modal.service';
import { ModalOverlayRef } from '../../modal/modalOverlayRef';
import { TasksService } from '../services/tasks.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TaskBoardComponent', () => {
  let component: TaskBoardComponent;
  let fixture: ComponentFixture<TaskBoardComponent>;
  let modalService: jasmine.SpyObj<ModalService>;
  let modelOverlayRef: jasmine.SpyObj<ModalOverlayRef>;
  // let tasksService: jasmine.SpyObj<TasksService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [
        TaskBoardComponent,
        AddTaskBoardComponent
      ],
      providers: [
        { provide: ModalService, useFactory: () => spyOnClass(ModalService) },
        { provide: ModalOverlayRef, useFactory: () => spyOnClass(ModalOverlayRef) },
        // { provide: TasksService, useFactory: () => spyOnClass(TasksService) }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskBoardComponent);
    component = fixture.componentInstance;
    modalService = TestBed.get(ModalService);
    // tasksService = TestBed.get(TasksService);

    // const data = require('../../../assets/mock-data/boards.json');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a property which holds the array of task boards which is initially holding no data', () => {
    expect(component.taskBoards).toBeTruthy();
    expect(component.taskBoards.length).toBe(0);
  });

  it('should display a message saying that there is no boards if there are none along with a button to create a board', () => {
    const noTaskBoardsMessage = fixture.nativeElement.querySelector('[data-test="noTaskBoardsMessage"]');
    const createBoardButton = fixture.nativeElement.querySelector('[data-test="createBoardButton"]');

    expect(noTaskBoardsMessage).toBeTruthy();
    expect(noTaskBoardsMessage.innerText).toBe('You have no boards.');
    expect(createBoardButton).toBeTruthy();
  });

  it('should call up the add task component if you click the "Create one" button', async(() => {
    const createBoardButton = fixture.nativeElement.querySelector('[data-test="createBoardButton"]');
    const addTaskBoard = fixture.nativeElement.querySelector('[data-test="addTaskBoard"]');
    expect(createBoardButton).toBeTruthy();

    createBoardButton.click();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(modalService.open).toHaveBeenCalledWith(AddTaskBoardComponent, null, 400);
    });
  }));

  it('should recieve a payload of Taskboards from its subscription to the TaskService', fakeAsync(() => {
    const data = require('../../../assets/mock-data/boards.json');
    let tasksService = fixture.debugElement.injector.get(TasksService);
    let spyOnGetTaskBoard$ = spyOn(tasksService, 'getTaskBoard$').and.returnValue(of(data));
    let spyOnUpdateTaskboards = spyOn(tasksService, 'updateTaskboards').and.returnValue(data);

    let spy = spyOn(component, 'getTaskBoards').and.returnValue(data);

    fixture.detectChanges();
    expect(component.taskBoards.length).toBe(0);
    component.ngOnInit();

    tick();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  }));

});
