import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Course } from '@data-access/courses/types';

@Component({
  selector: 'app-course-card',
  standalone: false,
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardComponent {
  @Input() course!: Course;
}
