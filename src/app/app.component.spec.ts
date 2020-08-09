import { TestBed, async, fakeAsync, ComponentFixture, tick,  } from '@angular/core/testing';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of, Subject, Observable } from 'rxjs';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { TasksModule } from './tasks/tasks.module';
import { Overlay } from '@angular/cdk/overlay';
import { spyOnClass } from 'jasmine-es6-spies';
import { ModalModule } from './modal/modal.module';
import { TasksService } from './tasks/services/tasks.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  // let tasksService: jasmine.SpyObj<TasksService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularSvgIconModule.forRoot(),
        HttpClientModule,
        TasksModule,
        ModalModule
      ],
      declarations: [
        AppComponent,
        ToolbarComponent,
        FooterComponent
      ],
      providers: [
        { provide: Overlay, useFactory: () => spyOnClass(Overlay)},
        // { provide: TasksService, useFactory: () => spyOnClass(TasksService)}
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    const taskBoards = require('../assets/mock-data/boards.json');
    // tasksService = TestBed.get(TasksService);
    // tasksService.getTaskBoard$.and.returnValue(of(taskBoards));


    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should display the toolbar component', () => {
    const toolbar = fixture.nativeElement.querySelector('[data-test="toolbar"]');
    expect(toolbar).toBeTruthy();
  });

  it('should display the menu component', () => {
    const menu = fixture.nativeElement.querySelector('[data-test="menu"]');
    expect(menu).toBeTruthy();
  });

  it('should display the taskboard component', () => {
    const taskBoard = fixture.nativeElement.querySelector('[data-test="taskBoard"]');
    expect(taskBoard).toBeTruthy();
  });

  it('should display the footer', () => {
    const footer = fixture.nativeElement.querySelector('[data-test="footer"]');
    expect(footer).toBeTruthy();
  });

  it('should contain a taskBoards array which has no values', () => {
    expect(component.taskBoards.length).toBe(0);
  });

  it('should request for the tasksService to return a list of TaskBoards on initialisation', async(() => {
    const data = require('../assets/mock-data/boards.json');
    let tasksService = fixture.debugElement.injector.get(TasksService);
    let spyOnGetTaskBoard$ = spyOn(tasksService, 'getTaskBoard$').and.returnValue(of(data));
    let spyOnUpdateTaskboards = spyOn(tasksService, 'updateTaskboards').and.returnValue(data);

    component.ngOnInit();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(tasksService.getTaskBoard$).toHaveBeenCalled();
      expect(spyOnUpdateTaskboards).toHaveBeenCalledWith(data);
    });
  }));

});
