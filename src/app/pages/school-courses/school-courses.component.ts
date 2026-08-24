import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { SchoolService } from '@entities/school';

import { CourseFilterComponent } from '@features/listing/course-filter';
import { selectRouteParam } from '@shared/lib/route';

import { BreadcrumbsComponent } from '@shared/ui/breadcrumbs';
import { CourseListComponent } from '@widgets/course-list';

import { AsyncStatusComponent } from '@shared/ui/async-status';
import { PaginationComponent } from '@shared/ui/pagination';
import { CourseService } from '@entities/course';
import { AsyncPipe, CommonModule } from '@angular/common';
import { PageHeaderComponent } from '@shared/ui/page-header';

import { ButtonComponent } from '@shared/ui';
import { StarComponent } from '@shared/ui/star';

@Component({
  selector: 'app-school-courses',
  imports: [
    AsyncPipe,
    CommonModule,
    RouterLink,
    CourseFilterComponent,
    CourseListComponent,
    BreadcrumbsComponent,
    AsyncStatusComponent,
    PaginationComponent,
    PageHeaderComponent,
    ButtonComponent,
    StarComponent,
  ],
  standalone: true,
  templateUrl: './school-courses.component.html',
  styleUrl: './school-courses.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolCoursesComponent {
  public readonly courseService = inject(CourseService);
  public readonly schoolService = inject(SchoolService);
  public readonly schoolId$ = selectRouteParam('id');

  public readonly courses$ = this.schoolId$.pipe(
    switchMap((id) => this.courseService.getFilteredBySchool$(id)),
  );

  public readonly school$ = this.schoolId$.pipe(
    switchMap((id) => this.schoolService.getById$(id)),
  );
}
