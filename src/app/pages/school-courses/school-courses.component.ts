import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SchoolLine, SchoolService } from '@entities/school';

import { CourseFilterComponent } from '@features/courses/course-filter';
import { selectRouteParam } from '@shared/lib/route';
import { AsyncData } from '@shared/models';

import { BreadcrumbsComponent } from '@shared/ui/breadcrumbs';
import { CourseListComponent } from '@widgets/course-list';

import { SchoolHeaderComponent } from '@widgets/school-header';
import { BehaviorSubject, combineLatest, Observable, switchMap } from 'rxjs';
import { AsyncStatusComponent } from '@shared/ui/async-status';
import { PaginationComponent } from '@shared/ui/pagination';
import { CourseLine, CourseService } from '@entities/course';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-school-courses',
  imports: [
    AsyncPipe,
    SchoolHeaderComponent,
    CourseFilterComponent,
    CourseListComponent,
    BreadcrumbsComponent,
    AsyncStatusComponent,
    PaginationComponent,
  ],
  standalone: true,
  templateUrl: './school-courses.component.html',
  styleUrl: './school-courses.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolCoursesComponent {
  public readonly courseService = inject(CourseService);

  public readonly reload$ = new BehaviorSubject(null);
  public readonly schoolId$ = selectRouteParam('id');

  public readonly courses$: Observable<AsyncData<CourseLine[]>> = combineLatest([
    this.reload$,
    this.schoolId$,
  ]).pipe(switchMap(([_, id]) => this.courseService.getBySchoolId$(id)));
}
