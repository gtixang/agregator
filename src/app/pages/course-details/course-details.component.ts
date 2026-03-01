import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

@Component({
  selector: 'app-course-details',
  imports: [],
  standalone: true,
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseDetailsComponent {}
