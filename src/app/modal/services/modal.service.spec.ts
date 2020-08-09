import { TestBed } from '@angular/core/testing';
import { Overlay } from '@angular/cdk/overlay';
import { spyOnClass } from 'jasmine-es6-spies';

import { ModalService } from './modal.service';

describe('ModalService', () => {
  let service: ModalService;
  let overlay: jasmine.SpyObj<Overlay>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Overlay, useFactory: () => spyOnClass(Overlay)}
      ]
    });
    service = TestBed.inject(ModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
