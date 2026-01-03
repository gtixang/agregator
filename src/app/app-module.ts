import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SharedModule } from './modules/shared/shared.module';
import { IndexPageModule } from './modules/index-page/index-page.module';
import { OnlineCoursesModule } from './modules/online-courses/online-courses-module';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, SharedModule, IndexPageModule, OnlineCoursesModule],
  providers: [provideBrowserGlobalErrorListeners(), provideZonelessChangeDetection()],
  bootstrap: [App],
})
export class AppModule {}
