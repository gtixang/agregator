import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { CoursesPageComponent } from './pages';
import { CourseListSortHeaderComponent, CourseCategoriesComponent } from './components';
import { SharedModule } from '@shared/shared.module';

const routes: Route[] = [{ path: '', component: CoursesPageComponent }];

@NgModule({
  declarations: [
    CourseListSortHeaderComponent,
    CourseCategoriesComponent,
    CoursesPageComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [],
})
export class CourseModule {}
