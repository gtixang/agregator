import { NgModule } from '@angular/core';
import { CourseLineComponent } from './course-line/course-line.component';
import { CourseFiltersComponent } from './course-filters/course-filters.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CourseListHeaderComponent } from './course-list-header/course-list-header.component';
import { SchoolFiltersComponent } from './school-filters/school-filters.component';

@NgModule({
  declarations: [
    CourseLineComponent,
    CourseFiltersComponent,
    CourseListHeaderComponent,
    SchoolFiltersComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    CourseLineComponent,
    CourseFiltersComponent,
    CourseListHeaderComponent,
    SchoolFiltersComponent,
  ],
})
export class FeaturesCoursesModule {}
