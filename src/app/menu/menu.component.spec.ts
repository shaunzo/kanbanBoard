import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { TasksService } from '../tasks/services/tasks.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ MenuComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const boardData = '../../assets/mock-data/boards.json';
    let tasksService = fixture.debugElement.injector.get(TasksService);
    let spyOnGetTaskBoard$ = spyOn(tasksService, 'getTaskBoard$').and.returnValue(of(boardData));
    expect(component).toBeTruthy();
  });

  it('should display the boards component', () => {
    const boardsComponent = fixture.nativeElement.querySelector('[data-test="boards"]');
    expect(boardsComponent).toBeTruthy();

  });
});
