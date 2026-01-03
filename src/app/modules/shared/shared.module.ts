import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  ButtonComponent,
  CourseLineComponent,
  FooterComponent,
  HeaderComponent,
} from './components';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { TabNavigationComponent } from './components/tab-navigation/tab-navigation.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    CourseLineComponent,
    PageHeaderComponent,
    TabNavigationComponent,
    PaginationComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    CourseLineComponent,
    PageHeaderComponent,
    TabNavigationComponent,
    PaginationComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
