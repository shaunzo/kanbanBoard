import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { spyOnClass } from 'jasmine-es6-spies';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ModalComponent } from './modal.component';
import { ModalOverlayRef } from './modalOverlayRef';
import { ModalService } from './services/modal.service';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let modelOverlayRef: jasmine.SpyObj<ModalOverlayRef>;
  let modalService: jasmine.SpyObj<ModalService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [
        { provide: ModalOverlayRef, useFactory: () => spyOnClass(ModalOverlayRef) },
        { provide: ModalService, useFactory: () => spyOnClass(ModalService) }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain an outer wrapper with a class of modal-content', () => {
    const el = fixture.nativeElement.querySelector('[data-test="modal-content"]');
    expect(el).toBeTruthy();
  });

  it('should display the "string-content" element if the contentType is set to string', async(() => {
    let el = fixture.nativeElement.querySelector('[data-test="string-content"]');
    expect(el).toBeFalsy();

    component.content = "Hello World";
    component.contentType = 'string';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      el = fixture.nativeElement.querySelector('[data-test="string-content"]');
      expect(el).toBeTruthy();
      expect(el.innerText).toBe("Hello World");
    });

  }));

});
