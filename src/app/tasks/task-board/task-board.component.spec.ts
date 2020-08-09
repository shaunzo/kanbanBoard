import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { spyOnClass } from 'jasmine-es6-spies';

import { TaskBoardComponent } from './task-board.component';
import { AddTaskBoardComponent } from '../add-task-board/add-task-board.component';
import { ModalService } from '../../modal/services/modal.service';
import { ModalOverlayRef } from '../../modal/modalOverlayRef';

describe('TaskBoardComponent', () => {
  let component: TaskBoardComponent;
  let fixture: ComponentFixture<TaskBoardComponent>;
  let modalService: jasmine.SpyObj<ModalService>;
  let modelOverlayRef: jasmine.SpyObj<ModalOverlayRef>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TaskBoardComponent,
        AddTaskBoardComponent
      ],
      providers: [
        { provide: ModalService, useFactory: () => spyOnClass(ModalService) },
        { provide: ModalOverlayRef, useFactory: () => spyOnClass(ModalOverlayRef) }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    modalService = TestBed.get(ModalService);
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

});
