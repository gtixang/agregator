import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';

import {
  HeaderComponent,
  FooterComponent,
  PageHeaderComponent,
  TabNavigationComponent,
  BreadcrumbsComponent,
  PaginationComponent,
  SchoolListComponent,
  CourseListComponent,
  SchoolLineComponent,
  CourseLineComponent,
  FilterControlsComponent,
  PageHeaderContentComponent,
  PageHeaderActionsComponent,
} from '@shared/components';

import { CheckboxComponent, RangeComponent, ButtonComponent } from '@shared/ui';

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
    SchoolListComponent,
    CourseListComponent,
    SchoolLineComponent,
    CourseLineComponent,
    FilterControlsComponent,
    PageHeaderContentComponent,
    PageHeaderActionsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSliderModule,
    ReactiveFormsModule,
    RouterModule,
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
    SchoolListComponent,
    CourseListComponent,
    SchoolLineComponent,
    CourseLineComponent,
    FilterControlsComponent,
    PageHeaderContentComponent,
    PageHeaderActionsComponent,
  ],
})
export class SharedModule {}
