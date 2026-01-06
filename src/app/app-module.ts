import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { AppRoutingModule } from './app-routing-module';
import { SharedModule } from '@shared/shared.module';
import { IndexPageModule } from '@pages/index-page';
import { OnlineCoursesModule } from '@pages/online-courses';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, SharedModule, IndexPageModule, OnlineCoursesModule],
  providers: [provideBrowserGlobalErrorListeners(), provideZonelessChangeDetection()],
  bootstrap: [App],
})
export class AppModule {}
