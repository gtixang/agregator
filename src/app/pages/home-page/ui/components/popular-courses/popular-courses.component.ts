import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { AsyncData } from '@shared/models';

import { CourseLine } from '@data-access/courses/types';

import { CourseListComponent } from '@widgets/course-list';
import { CategoriesTabsComponent } from '@features/categories-tabs';
import { ButtonComponent } from '@shared/ui';

@Component({
  selector: 'app-popular-courses',
  imports: [CategoriesTabsComponent, CourseListComponent, ButtonComponent],
  standalone: true,
  templateUrl: './popular-courses.component.html',
  styleUrl: './popular-courses.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopularCoursesComponent {
  @Input({ required: true }) courseLines!: CourseLine[];
}
