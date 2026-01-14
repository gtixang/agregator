import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import {
  CourseCardComponent,
  CourseFilterComponent,
  SchoolFilterComponent,
  SchoolCardComponent,
} from '@features/common-ui';

@NgModule({
  declarations: [
    CourseCardComponent,
    SchoolCardComponent,
    CourseFilterComponent,
    SchoolFilterComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
  exports: [
    CourseCardComponent,
    SchoolCardComponent,
    CourseFilterComponent,
    SchoolFilterComponent,
    SharedModule,
  ],
})
export class CommonUiModule {}
