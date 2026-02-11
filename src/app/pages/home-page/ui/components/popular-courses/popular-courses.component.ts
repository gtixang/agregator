import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';

import { BehaviorSubject, Observable, switchMap } from 'rxjs';

import { AsyncData } from '@shared/models';
import { CourseService } from '@data-access/courses';
import { CourseLine } from '@data-access/courses/types';

import { CourseListComponent } from '@widgets/course-list';
import { CategoriesTabsComponent } from '@features/categories-tabs';

@Component({
  selector: 'app-popular-courses',
  standalone: true,
  templateUrl: './popular-courses.component.html',
  styleUrl: './popular-courses.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CategoriesTabsComponent, CourseListComponent],
})
export class PopularCoursesComponent {
  @Input({ required: true }) courseLines!: AsyncData<CourseLine[]>;
}
