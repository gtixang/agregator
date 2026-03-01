import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { BehaviorSubject, Observable, switchMap } from 'rxjs';

import { AsyncData } from '@shared/models';

import { AsyncPipe } from '@angular/common';

import { AsyncStatusComponent } from '@shared/ui/async-status';

import { SchoolService } from '@entities/school';

import {
  AdvantagesComponent,
  BannerComponent,
  BlogPreviewComponent,
  CourseDirectionsTabsComponent,
  PopularCoursesComponent,
  SchoolsSliderComponent,
} from './components';
import { SchoolPreview } from '@entities/school';
import { CourseLine, CourseService } from '@entities/course';

@Component({
  selector: 'app-home',
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
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly schoolsService = inject(SchoolService);
  private readonly coursesService = inject(CourseService);

  public reload$ = new BehaviorSubject(null);

  public schoolsPreviews$!: Observable<AsyncData<SchoolPreview[]>>;
  public courses$!: Observable<AsyncData<CourseLine[]>>;

  ngOnInit() {
    this.schoolsPreviews$ = this.reload$.pipe(
      switchMap(() => this.schoolsService.getPreviews$()),
    );

    this.courses$ = this.reload$.pipe(switchMap(() => this.coursesService.getAll$()));
  }
}
