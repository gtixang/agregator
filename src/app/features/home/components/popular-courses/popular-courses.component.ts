import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CourseService } from '@data-access/courses';
import { Course } from '@data-access/courses/types';

import { AsyncData } from '@shared/models';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-popular-courses',
  standalone: false,
  templateUrl: './popular-courses.component.html',
  styleUrl: './popular-courses.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopularCoursesComponent {
  public readonly courseSrvice = inject(CourseService);
  public courses$!: Observable<AsyncData<Course[]>>;
  public reload$ = new BehaviorSubject(null);

  ngOnInit() {
    this.courses$ = this.reload$.pipe(switchMap(() => this.courseSrvice.getCourses$()));

    this.courses$.pipe(tap((res) => console.log(res))).subscribe();
  }
}
