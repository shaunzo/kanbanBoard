import { TestBed, fakeAsync, async, ComponentFixture, tick } from '@angular/core/testing';
import { TasksService } from './tasks.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { of } from 'rxjs';
import { spyOnClass } from 'jasmine-es6-spies';

describe('TasksService', () => {
  let service: TasksService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(TasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('Should contain a getTaskboards() method which returns a list of TaskBoard objects', fakeAsync(() => {
    const spy = jasmine.createSpy('spy');

    const taskBoardsResponse = require('../../../assets/mock-data/boards.json');
    spyOn(service, 'getTaskBoard$').and.returnValue(of(taskBoardsResponse));
    service.getTaskBoard$().subscribe(spy);
    tick();

    expect(spy).toHaveBeenCalledWith(taskBoardsResponse);

  }));
});
