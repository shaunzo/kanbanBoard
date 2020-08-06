import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';

fdescribe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the logo', () => {
    const logo = fixture.nativeElement.querySelector('[data-test="logo"]');
    expect(logo).toBeTruthy();
  });

  it('should display a "Add Taskboard" button', () => {
    const addTaskBoardButton = fixture.nativeElement.querySelector('[data-test="addTaskBoard"]');
    expect(addTaskBoardButton).toBeTruthy();
    expect(addTaskBoardButton.innerText).toEqual('Add Taskboard');
  });

  it('should display a "Remove Taskboard" button', () => {
    const removeTaskBoard = fixture.nativeElement.querySelector('[data-test="removeTaskBoard"]');
    expect(removeTaskBoard).toBeTruthy();
    expect(removeTaskBoard.innerText).toEqual('Remove Taskboard');
  });

  it('should call up a modal containing the createTaskBoard component when "Add Taskboard" is clicked', async(() => {
    spyOn(component, 'addTaskBoard');
    const addTaskBoardButton = fixture.nativeElement.querySelector('[data-test="addTaskBoard"]');
    addTaskBoardButton.click();
    fixture.whenStable().then(() => {
      expect(component.addTaskBoard).toHaveBeenCalled();
    });
  }));

  it('should call up a method called removeTaskBoard() when "Remove Taskboard" is clicked', async(() => {
    spyOn(component, 'removeTaskBoard');
    const removeTaskBoardButton = fixture.nativeElement.querySelector('[data-test="removeTaskBoard"]');
    removeTaskBoardButton .click();
    fixture.whenStable().then(() => {
      expect(component.removeTaskBoard).toHaveBeenCalled();
    });
  }));
});
