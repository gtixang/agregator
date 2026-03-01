import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { CourseCategoriesComponent } from './components/course-categories';

import {
  SortControlsComponent,
  CourseFilterComponent,
  CourseTopicTabComponent,
} from '@features/courses';

import { BreadcrumbsComponent } from '@shared/ui/breadcrumbs';

import { PageHeaderComponent } from '@shared/ui/page-header';

import { SchoolListComponent } from '@widgets/school-list';
import { CourseListComponent } from '@widgets/course-list';
import { CourseLine, CourseService } from '@entities/course';
import { SchoolLine, SchoolService } from '@entities/school';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { AsyncData } from '@shared/models';
import { AsyncStatusComponent } from '@shared/ui/async-status';
import { AsyncPipe } from '@angular/common';
import { PaginationComponent } from '@shared/ui/pagination';

@Component({
  selector: 'app-online-courses',
  imports: [
    AsyncPipe,
    BreadcrumbsComponent,
    CourseFilterComponent,
    CourseCategoriesComponent,
    SortControlsComponent,
    CourseTopicTabComponent,
    PageHeaderComponent,
    SchoolListComponent,
    CourseListComponent,
    AsyncStatusComponent,
    PaginationComponent,
  ],
  standalone: true,
  templateUrl: './online-courses.component.html',
  styleUrl: './online-courses.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnlineCoursesComponent {
  public courseService = inject(CourseService);
  public schoolService = inject(SchoolService);
  public courses$!: Observable<AsyncData<CourseLine[]>>;
  public schools$!: Observable<AsyncData<SchoolLine[]>>;
  public reload$ = new BehaviorSubject(null);

  ngOnInit() {
    this.courses$ = this.reload$.pipe(switchMap(() => this.courseService.getAll$()));
    this.schools$ = this.reload$.pipe(switchMap(() => this.schoolService.getAll$()));
  }
}
