import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveTaskBoardComponent } from './remove-task-board.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RemoveTaskBoardComponent', () => {
  let component: RemoveTaskBoardComponent;
  let fixture: ComponentFixture<RemoveTaskBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveTaskBoardComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveTaskBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
