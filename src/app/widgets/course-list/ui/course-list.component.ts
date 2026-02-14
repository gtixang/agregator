import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CourseLine } from '@data-access/courses/types';
import { CourseLineComponent } from '@entities/course';

@Component({
  selector: 'app-course-list',
  imports: [CourseLineComponent],
  standalone: true,
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListComponent {
  @Input({ required: true }) courseLines!: CourseLine[];
}
