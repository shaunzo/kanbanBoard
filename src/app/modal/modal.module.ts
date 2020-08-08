import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { ModalService } from './services/modal.service';



@NgModule({
  declarations: [ ModalComponent ],
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports: [ ModalComponent ],
  entryComponents: [ ModalComponent ],
  providers: [ ModalService ]
})
export class ModalModule { }
