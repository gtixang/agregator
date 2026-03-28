import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CourseListComponent } from '@widgets/course-list';

import { ButtonComponent } from '@shared/ui';
import { CourseLine } from '@entities/course';
import { TopicsTabsComponent } from '@features/listing';

@Component({
  selector: 'app-popular-courses',
  imports: [TopicsTabsComponent, CourseListComponent, ButtonComponent],
  standalone: true,
  templateUrl: './popular-courses.component.html',
  styleUrl: './popular-courses.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopularCoursesComponent {
  @Input({ required: true }) courses!: CourseLine[];
}
