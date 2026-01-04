import { Component, Input } from '@angular/core';
import { Course } from './interfaces';

@Component({
  selector: 'app-course-line',
  standalone: false,
  templateUrl: './course-line.component.html',
  styleUrl: './course-line.component.scss',
})
export class CourseLineComponent {
  @Input({ required: true }) course!: Course;
}
