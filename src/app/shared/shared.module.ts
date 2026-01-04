import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonComponent, FooterComponent, HeaderComponent } from './ui';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from './ui/page-header/page-header.component';
import { TabNavigationComponent } from './ui/tab-navigation/tab-navigation.component';
import { PaginationComponent } from './ui/pagination/pagination.component';
import { CheckboxComponent } from './ui/inputs/checkbox/checkbox.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    PageHeaderComponent,
    TabNavigationComponent,
    PaginationComponent,
    CheckboxComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    PageHeaderComponent,
    TabNavigationComponent,
    PaginationComponent,
    CheckboxComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
