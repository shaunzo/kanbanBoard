import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { TasksModule } from './tasks/tasks.module';
import { ModalModule } from './modal/modal.module';
import { TasksService } from './tasks/services/tasks.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MenuComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    TasksModule,
    ModalModule
  ],
  providers: [
    TasksService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/**
 * Modal tutorial:
 * https://codinglatte.com/posts/angular/reusable-modal-overlay-using-angular-cdk-overlay/
 */
