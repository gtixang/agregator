import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';

import {
  HeaderComponent,
  FooterComponent,
  PageHeaderComponent,
  TabNavigationComponent,
  BreadcrumbsComponent,
  PaginationComponent,
} from '@shared/components';

import { CheckboxComponent, RangeComponent, ButtonComponent, ChipComponent } from '@shared/ui';

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
    ChipComponent,
  ],
  imports: [CommonModule, RouterModule, MatSliderModule],
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
    ChipComponent,
  ],
})
export class SharedModule {}
