import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CourseListComponent } from '@widgets/course-list';
import { CourseTopicTabComponent } from '@features/courses';
import { ButtonComponent } from '@shared/ui';
import { CourseLine } from '@entities/course';

@Component({
  selector: 'app-popular-courses',
  imports: [CourseTopicTabComponent, CourseListComponent, ButtonComponent],
  standalone: true,
  templateUrl: './popular-courses.component.html',
  styleUrl: './popular-courses.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopularCoursesComponent {
  @Input({ required: true }) courses!: CourseLine[];
}
