import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddTaskColumnComponent } from './add-task-column.component';
import { ModalComponent } from '../../../modal/modal.component';
import { spyOnClass } from 'jasmine-es6-spies';

describe('AddTaskColumnComponent', () => {
  let component: AddTaskColumnComponent;
  let fixture: ComponentFixture<AddTaskColumnComponent>;
  let modalComponent: jasmine.SpyObj<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTaskColumnComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [
        { provide: ModalComponent, useFactory: () => spyOnClass(ModalComponent) }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
