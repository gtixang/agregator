import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { SchoolService } from '@data-access/schools';
import { SchoolPreview } from '@data-access/schools/types';
import { AsyncData } from '@shared/models';
import { CourseService } from '@data-access/courses';
import {
  BannerComponent,
  AdvantagesComponent,
  CourseDirectionsTabsComponent,
  SchoolsSliderComponent,
  BlogPreviewComponent,
  PopularCoursesComponent,
} from './components';
import { AsyncPipe } from '@angular/common';
import { CourseLine } from '@data-access/courses/types';
import { AsyncStatusComponent } from '@shared/ui/async-status';

@Component({
  selector: 'app-home-page',
  imports: [
    AsyncPipe,
    BannerComponent,
    AdvantagesComponent,
    CourseDirectionsTabsComponent,
    SchoolsSliderComponent,
    BlogPreviewComponent,
    PopularCoursesComponent,
    AsyncStatusComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  private readonly courseService = inject(CourseService);
  private readonly schoolService = inject(SchoolService);

  public reload$ = new BehaviorSubject(null);

  public schools$!: Observable<AsyncData<SchoolPreview[]>>;

  public courseLines$!: Observable<AsyncData<CourseLine[]>>;

  ngOnInit() {
    this.schools$ = this.reload$.pipe(
      switchMap(() => this.schoolService.getSchoolsPreview$()),
    );

    this.courseLines$ = this.reload$.pipe(
      switchMap(() => this.courseService.getAllCourseLines$()),
    );
  }
}
