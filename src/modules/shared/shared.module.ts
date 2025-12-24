import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  ButtonComponent,
  CourseLineComponent,
  FooterComponent,
  HeaderComponent,
} from './components';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ButtonComponent, CourseLineComponent],
  exports: [HeaderComponent, FooterComponent, ButtonComponent, CourseLineComponent],
  imports: [CommonModule],
})
export class SharedModule {}
