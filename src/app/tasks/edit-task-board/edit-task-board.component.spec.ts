// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { EditTaskBoardComponent } from './edit-task-board.component';
// import { ModalComponent } from '../../modal/modal.component';
// import { ModalService } from '../../modal/services/modal.service';
// import { spyOnClass } from 'jasmine-es6-spies';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';

// fdescribe('EditTaskBoardComponent', () => {
//   let component: EditTaskBoardComponent;
//   let fixture: ComponentFixture<EditTaskBoardComponent>;
//   let modalComponent: jasmine.SpyObj<ModalComponent>;
//   let modalService: jasmine.SpyObj<ModalService>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ EditTaskBoardComponent ],
//       imports: [ HttpClientTestingModule, ReactiveFormsModule ],
//       providers: [
//         { provide: ModalService, useFactory: () => spyOnClass(ModalService)},
//         { provide: ModalComponent, useFactory: () => spyOnClass(ModalComponent) }
//       ],
//       schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(EditTaskBoardComponent);
//     component = fixture.componentInstance;
//     modalService = TestBed.get(ModalService);
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     fixture.detectChanges();
//     expect(component).toBeTruthy();
//   });
// });
