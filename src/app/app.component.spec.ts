import { TestBed, async, ComponentFixture,  } from '@angular/core/testing';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { TasksModule } from './tasks/tasks.module';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularSvgIconModule,
        HttpClientModule,
        TasksModule
      ],
      declarations: [
        AppComponent,
        ToolbarComponent,
        FooterComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
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

});
