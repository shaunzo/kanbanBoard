import { Injectable, Injector, TemplateRef, Type } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { MyOverlayRef } from './myOverlayRef';
import { ModalComponent } from './modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  constructor(private overlay: Overlay, private injector: Injector) { }

  open<R = any, T = any>(
    content: string | TemplateRef<any> | Type<any>, data: T, width: number): MyOverlayRef<R> {
      const configs = new OverlayConfig({
        hasBackdrop: true,
        panelClass: ['modal', 'is-active'],
        backdropClass: 'modal-background',
        width: `${width}px`
      });

      const overlayRef = this.overlay.create(configs);

      const myOverlayRef = new MyOverlayRef<R, T>(overlayRef, content, data);

      const injector = this.createInjector(myOverlayRef, this.injector);

      overlayRef.attach(new ComponentPortal(ModalComponent, null, injector));

      return myOverlayRef;
    }

    createInjector(ref: MyOverlayRef, inj: Injector) {
      const injectorTokens = new WeakMap([[MyOverlayRef, ref]]);
      return new PortalInjector(inj, injectorTokens);
    }
}
