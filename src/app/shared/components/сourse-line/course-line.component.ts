import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Course } from '@data-access/courses/types';

@Component({
  selector: 'app-course-line',
  standalone: false,
  templateUrl: './course-line.component.html',
  styleUrl: './course-line.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseLineComponent {
  @Input() course!: Course;
}
