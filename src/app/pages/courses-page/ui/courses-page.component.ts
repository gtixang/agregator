import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CourseService } from '@data-access/courses';
import { CourseLine } from '@data-access/courses/types';
import { SchoolService } from '@data-access/schools';
import { SchoolLine } from '@data-access/schools/types';
import { AsyncData } from '@shared/models';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { CourseCategoriesComponent } from '../components';

import { CourseListComponent } from '@widgets/course-list';
import { SchoolListComponent } from '@widgets/school-list';
import { CourseSortingComponent } from '@features/course-sorting';
import { CourseFilterComponent } from '@features/course-filter';
import { CategoriesTabsComponent } from '@features/categories-tabs';
import { PageTitleComponent } from '@shared/ui/page-title';
import { AsyncPipe } from '@angular/common';
import { BreadcrumbsComponent } from '@shared/ui/breadcrumbs';
import { AsyncStatusComponent } from '@shared/ui/async-status';

@Component({
  selector: 'app-courses-page',
  standalone: true,
  imports: [
    AsyncPipe,
    BreadcrumbsComponent,
    CourseFilterComponent,
    CourseListComponent,
    CourseCategoriesComponent,
    SchoolListComponent,
    CourseSortingComponent,
    CategoriesTabsComponent,
    PageTitleComponent,
    AsyncStatusComponent,
  ],
  templateUrl: './courses-page.component.html',
  styleUrl: './courses-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesPageComponent {
  public readonly courseService = inject(CourseService);
  public readonly schoolService = inject(SchoolService);
  public courseLines$!: Observable<AsyncData<CourseLine[]>>;
  public schoolLines$!: Observable<AsyncData<SchoolLine[]>>;
  public readonly reload$ = new BehaviorSubject(null);

  ngOnInit() {
    this.courseLines$ = this.reload$.pipe(
      switchMap(() => this.courseService.getAllCourseLines$()),
    );
    this.schoolLines$ = this.reload$.pipe(
      switchMap(() => this.schoolService.getSchoolLines$()),
    );
  }
}
