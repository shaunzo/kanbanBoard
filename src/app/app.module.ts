import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { TasksModule } from './tasks/tasks.module';
import { ModalModule } from './modal/modal.module';
import { TasksService } from './tasks/services/tasks.service';
import { MenuModule } from './menu/menu.module';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    TasksModule,
    ModalModule,
    MenuModule
  ],
  providers: [
    TasksService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
