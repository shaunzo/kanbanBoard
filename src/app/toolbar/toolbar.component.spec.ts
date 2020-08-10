import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { spyOnClass } from 'jasmine-es6-spies';

import { ToolbarComponent } from './toolbar.component';
import { ModalComponent } from '../modal/modal.component';
import { ModalService } from '../modal/services/modal.service';
import { ModalOverlayRef } from '../modal/modalOverlayRef';
import { AddTaskBoardComponent } from '../tasks/add-task-board/add-task-board.component';
import { RemoveTaskBoardComponent } from  '../tasks/remove-task-board/remove-task-board.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;
  let modalComponent: ComponentFixture<ModalComponent>;
  let addTaskBoardComponent: ComponentFixture<AddTaskBoardComponent>;
  let removeTaskBoardComponent: ComponentFixture<RemoveTaskBoardComponent>;
  let modalService: jasmine.SpyObj<ModalService>;
  let modelOverlayRef: jasmine.SpyObj<ModalOverlayRef>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ToolbarComponent,
        ModalComponent
      ],
      imports: [ HttpClientTestingModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [
        { provide: ModalService, useFactory: () => spyOnClass(ModalService) },
        { provide: ModalOverlayRef, useFactory: () => spyOnClass(ModalOverlayRef) }

      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    modalComponent = TestBed.createComponent(ModalComponent);
    addTaskBoardComponent = TestBed.createComponent(AddTaskBoardComponent);
    removeTaskBoardComponent = TestBed.createComponent(RemoveTaskBoardComponent);
    modalService = TestBed.get(ModalService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the logo', () => {
    const logo = fixture.nativeElement.querySelector('[data-test="logo"]');
    expect(logo).toBeTruthy();
  });

  it('should display a "Add Taskboard" button', () => {
    const addTaskBoardButton = fixture.nativeElement.querySelector('[data-test="addTaskBoard"]');
    expect(addTaskBoardButton).toBeTruthy();
    expect(addTaskBoardButton.innerText).toEqual('Add Taskboard');
  });

  it('should display a "Remove Taskboard" button', () => {
    const removeTaskBoard = fixture.nativeElement.querySelector('[data-test="removeTaskBoard"]');
    expect(removeTaskBoard).toBeTruthy();
    expect(removeTaskBoard.innerText).toEqual('Remove Taskboard');
  });

  it('should call up a modal containing the createTaskBoard component when "Add Taskboard" is clicked', async(() => {
    spyOn(component, 'addTaskBoard');
    const addTaskBoardButton = fixture.nativeElement.querySelector('[data-test="addTaskBoard"]');
    const modal = modalComponent.componentInstance;
    const addTaskBoardForm = addTaskBoardComponent.componentInstance;

    addTaskBoardButton.click();

    fixture.whenStable().then(() => {
      expect(component.addTaskBoard).toHaveBeenCalled();
      expect(modal).toBeTruthy();
      expect(addTaskBoardForm).toBeTruthy();
    });
  }));

  it('should call up a modal with the RemoveTaskBoard component when "Remove Taskboard" is clicked', async(() => {
    spyOn(component, 'removeTaskBoard');
    const removeTaskBoardButton = fixture.nativeElement.querySelector('[data-test="removeTaskBoard"]');
    const modal = modalComponent.componentInstance;
    const removeTaskBoardConfirm = removeTaskBoardComponent.componentInstance;

    removeTaskBoardButton .click();

    fixture.whenStable().then(() => {
      expect(component.removeTaskBoard).toHaveBeenCalled();
      expect(modal).toBeTruthy();
      expect(removeTaskBoardConfirm).toBeTruthy();
    });
  }));
});
