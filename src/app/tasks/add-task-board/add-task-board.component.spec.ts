import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskBoardComponent } from './add-task-board.component';

describe('AddTaskBoardComponent', () => {
  let component: AddTaskBoardComponent;
  let fixture: ComponentFixture<AddTaskBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTaskBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
