import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import {
  CourseCardComponent,
  ListingFiltersComponent,
  SchoolCardComponent,
} from '@features/common-ui';

@NgModule({
  declarations: [CourseCardComponent, SchoolCardComponent, ListingFiltersComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
  exports: [
    CourseCardComponent,
    SchoolCardComponent,
    ListingFiltersComponent,
    SharedModule,
  ],
})
export class CommonUiModule {}
