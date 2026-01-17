import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { CommonUiModule } from '@features/common-ui';

import { CoursesPageComponent } from './pages';
import { CourseListComponent, CourseListSortHeaderComponent } from './components';

const routes: Route[] = [{ path: '', component: CoursesPageComponent }];

@NgModule({
  declarations: [
    CourseListComponent,
    CourseListSortHeaderComponent,
    CoursesPageComponent,
  ],
  imports: [CommonModule, CommonUiModule, RouterModule.forChild(routes)],
  exports: [],
})
export class CourseModule {}
