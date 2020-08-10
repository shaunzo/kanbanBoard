import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskBoardComponent } from './add-task-board.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ModalService } from '../../modal/services/modal.service';
import { spyOnClass } from 'jasmine-es6-spies';

describe('AddTaskBoardComponent', () => {
  let component: AddTaskBoardComponent;
  let fixture: ComponentFixture<AddTaskBoardComponent>;
  let modalService: jasmine.SpyObj<ModalService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ AddTaskBoardComponent ],
      providers: [{
        provide: ModalService, useFactory: () => spyOnClass(ModalService)}
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
    expect(component).toBeTruthy();
  });
});
