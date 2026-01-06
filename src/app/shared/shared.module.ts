import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import {
  HeaderComponent,
  FooterComponent,
  PageHeaderComponent,
  TabNavigationComponent,
  BreadcrumbsComponent,
  PaginationComponent,
} from '@shared/components';

import { CheckboxComponent, ButtonComponent } from '@shared/ui';
import { RangeComponent } from './ui/inputs/range/range.component';

import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    PageHeaderComponent,
    TabNavigationComponent,
    PaginationComponent,
    CheckboxComponent,
    BreadcrumbsComponent,
    RangeComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    PageHeaderComponent,
    TabNavigationComponent,
    PaginationComponent,
    CheckboxComponent,
    BreadcrumbsComponent,
    RangeComponent,
  ],
  imports: [CommonModule, RouterModule, MatSliderModule],
})
export class SharedModule {}
