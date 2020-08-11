import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskColumnComponent } from './task-column.component';
import { ModalService } from '../../../modal/services/modal.service';
import { ModalOverlayRef } from '../../../modal/modalOverlayRef';
import { spyOnClass } from 'jasmine-es6-spies';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TaskColumnComponent', () => {
  let component: TaskColumnComponent;
  let fixture: ComponentFixture<TaskColumnComponent>;
  let modalService: jasmine.SpyObj<ModalService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskColumnComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [
        { provide: ModalService, useFactory: () => spyOnClass(ModalService) },
        { provide: ModalOverlayRef, useFactory: () => spyOnClass(ModalOverlayRef) },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
