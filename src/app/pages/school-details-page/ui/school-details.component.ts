import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BehaviorSubject, combineLatest, filter, map, Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { CourseService } from '@data-access/courses';
import { SchoolService } from '@data-access/schools';

import { CourseLine } from '@data-access/courses/types';
import { SchoolDetailPageHeader, SchoolPreview } from '@data-access/schools/types';

import { AsyncData } from '@shared/models';
import { AsyncPipe } from '@angular/common';

import { BreadcrumbsComponent } from '@widgets/breadcrumbs';
import { CourseListComponent } from '@widgets/course-list';

import { CourseFilterComponent } from '@features/course-filter';
import { SchoolRatingComponent } from '@entities/school';
import { PageTitleComponent } from '@shared/ui/page-title';
import { PageHeaderComponent } from '@shared/ui/page-header';
import { ButtonComponent } from '@shared/ui';

@Component({
  selector: 'app-school-detail',
  standalone: true,
  imports: [
    AsyncPipe,
    BreadcrumbsComponent,
    CourseListComponent,
    CourseFilterComponent,
    PageTitleComponent,
    SchoolRatingComponent,
    PageHeaderComponent,
    ButtonComponent,
  ],
  templateUrl: './school-details.component.html',
  styleUrl: './school-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolDetailsComponent {
  public readonly route = inject(ActivatedRoute);
  public readonly schoolService = inject(SchoolService);
  public readonly courseService = inject(CourseService);

  public school$!: Observable<AsyncData<SchoolDetailPageHeader>>;
  public courseLines$!: Observable<AsyncData<CourseLine[]>>;

  public reload$ = new BehaviorSubject(null);
  public schoolId$!: Observable<string>;

  ngOnInit() {
    this.schoolId$ = this.route.paramMap.pipe(
      map((params) => params.get('id')),
      filter((id): id is string => id !== null),
    );

    const triggers$ = combineLatest([this.reload$, this.schoolId$]);

    this.school$ = triggers$.pipe(
      switchMap(([, id]) => this.schoolService.getSchoolById$(id)),
    );

    this.courseLines$ = triggers$.pipe(
      switchMap(([, id]) => this.courseService.getSchoolCourseLines$(id)),
    );
  }
}
