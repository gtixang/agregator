import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  filter,
  map,
  Observable,
  shareReplay,
  switchMap,
} from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { CourseService } from '@data-access/courses';
import { SchoolService } from '@data-access/schools';

import { Course } from '@data-access/courses/types';
import { SchoolBaseDTO } from '@data-access/schools/types';

import { AsyncData } from '@shared/models';

@Component({
  selector: 'app-school-detail',
  standalone: false,
  templateUrl: './school-detail.component.html',
  styleUrl: './school-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolDetailComponent {
  public readonly route = inject(ActivatedRoute);
  public readonly schoolService = inject(SchoolService);
  public readonly courseService = inject(CourseService);

  public school$!: Observable<AsyncData<SchoolBaseDTO>>;
  public courses$!: Observable<AsyncData<Course[]>>;

  public reload$ = new BehaviorSubject(null);
  public schoolId$!: Observable<string>;

  ngOnInit() {
    this.schoolId$ = this.route.paramMap.pipe(
      map((params) => params.get('id')),
      filter(Boolean),
      shareReplay(1),
    );

    const triggers$ = combineLatest([this.reload$, this.schoolId$]);

    this.school$ = triggers$.pipe(
      switchMap(([, id]) => this.schoolService.getSchoolById$(id)),
    );

    this.courses$ = triggers$.pipe(
      switchMap(([, id]) => this.courseService.getSchoolCourses$(id)),
    );
  }
}
