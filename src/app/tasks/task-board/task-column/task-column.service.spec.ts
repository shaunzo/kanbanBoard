import { TestBed } from '@angular/core/testing';

import { TaskColumnService } from './task-column.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TaskColumnService', () => {
  let service: TaskColumnService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(TaskColumnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
