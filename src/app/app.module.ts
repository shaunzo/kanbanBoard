import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { TasksModule } from './tasks/tasks.module';
import { ModalModule } from './modal/modal.module';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    TasksModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/**
 * Modal tutorial:
 * https://codinglatte.com/posts/angular/reusable-modal-overlay-using-angular-cdk-overlay/
 */
