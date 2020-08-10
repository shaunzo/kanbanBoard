import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { spyOnClass } from 'jasmine-es6-spies';
import { TasksService } from '../../tasks/services/tasks.service';
import { BoardsComponent } from './boards.component';

describe('BoardsComponent', () => {
  let component: BoardsComponent;
  let fixture: ComponentFixture<BoardsComponent>;
  let tasksService: jasmine.SpyObj<TasksService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardsComponent ],
      providers: [ {
        provide: TasksService, useFactory: () => spyOnClass(TasksService)
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardsComponent);
    component = fixture.componentInstance;
    tasksService = TestBed.get(TasksService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the "Boards" heading', () => {
    const heading = fixture.nativeElement.querySelector('[data-test="heading"]');
    expect(heading).toBeTruthy();
    expect(heading.innerText).toBe('Boards');
  });

  it('should ONLY display a "No Boards" to list message if there are none', fakeAsync(() => {
    const boardsData = require('../../../assets/mock-data/boards.json');
    let noBoardsMessage = fixture.nativeElement.querySelector('[data-test="noBoardsMessage"]');
    expect(noBoardsMessage).toBeTruthy();

    component.boards = boardsData;
    fixture.detectChanges();

    tick();

    noBoardsMessage = fixture.nativeElement.querySelector('[data-test="noBoardsMessage"]');
    expect(noBoardsMessage).toBeFalsy();
  }));

  it('should display a list of items representing a board', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    const listOfBoards = fixture.nativeElement.querySelectorAll('[data-test="taskBoard"]');
    expect(listOfBoards.length).toEqual(component.boards.length);
  }));

  it('should call a method in the tasks service to set the current board to active if an item is clicked', fakeAsync(() => {
    component.boards = [
      {
        id: '1234',
        name: 'Sprint 1',
        active: false
      }
    ];

    fixture.detectChanges();

    tick();

    const boardItem = fixture.nativeElement.querySelector('[data-test="taskBoard"]');
    expect(boardItem).toBeTruthy();

    boardItem.click();

    fixture.detectChanges();

    tick();

    expect(tasksService.setActiveBoard).toHaveBeenCalledWith('1234');

  }));
});
