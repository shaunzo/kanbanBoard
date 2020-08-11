import { TestBed } from '@angular/core/testing';

import { RemoveTaskBoardService } from './remove-task-board.service';

describe('RemoveTaskBoardService', () => {
  let service: RemoveTaskBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoveTaskBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
