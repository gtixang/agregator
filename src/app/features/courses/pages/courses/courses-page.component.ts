import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CourseService } from '@data-access/courses';
import { Course } from '@data-access/courses/types';
import { SchoolService } from '@data-access/schools';
import { School } from '@data-access/schools/types';
import { AsyncData } from '@shared/models';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-courses-page',
  standalone: false,
  templateUrl: './courses-page.component.html',
  styleUrl: './courses-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesPageComponent {
  public readonly courseService = inject(CourseService);
  public readonly schoolService = inject(SchoolService);
  public courses$!: Observable<AsyncData<Course[]>>;
  public schools$!: Observable<AsyncData<School[]>>;
  public readonly reload$ = new BehaviorSubject(null);

  ngOnInit() {
    this.courses$ = this.reload$.pipe(
      switchMap(() => this.courseService.getCoursesList$()),
    );
    this.schools$ = this.reload$.pipe(
      switchMap(() => this.schoolService.getSchoolsList$()),
    );
  }
}
