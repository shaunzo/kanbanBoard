import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteColumnComponent } from './delete-column.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DeleteColumnComponent', () => {
  let component: DeleteColumnComponent;
  let fixture: ComponentFixture<DeleteColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ DeleteColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
