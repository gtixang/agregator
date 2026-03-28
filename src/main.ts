import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import localeRu from '@angular/common/locales/ru';
import { App } from './app/app';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeRu);

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
