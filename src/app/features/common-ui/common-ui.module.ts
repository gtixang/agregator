import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import {
  CourseCardComponent,
  CourseListComponent,
  ListingFiltersComponent,
  SchoolCardComponent,
  SchoolListComponent,
} from '@features/common-ui';

@NgModule({
  declarations: [
    CourseCardComponent,
    CourseListComponent,
    SchoolCardComponent,
    ListingFiltersComponent,
    SchoolListComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
  exports: [
    CourseCardComponent,
    CourseListComponent,
    SchoolCardComponent,
    SchoolListComponent,
    ListingFiltersComponent,
    SharedModule,
  ],
})
export class CommonUiModule {}
