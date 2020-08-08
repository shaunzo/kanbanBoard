import { Component, ViewContainerRef, OnInit, TemplateRef } from '@angular/core';
import { OverlayService } from './overlay.service';

import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private overlay: Overlay, private viewContainerRef: ViewContainerRef) {}

  ngOnInit() {

  }

  clickTest() {
    console.log('Clicked Backdrop');
  }

  /**
   * Overlay tests
   */
  openWithTemplate(tpl: TemplateRef<any>) {
    const configs = new OverlayConfig({
      hasBackdrop: true,
      panelClass: ['modal', 'is-active'],
      backdropClass: 'modal-background',
      width: '300px',
     });

    const overlayRef = this.overlay.create(configs);

    overlayRef.attach(new TemplatePortal(tpl, this.viewContainerRef));

    overlayRef.backdropClick().subscribe(() => {
      console.log('Clicked the BG');
      overlayRef.dispose();
    });
  }
}
