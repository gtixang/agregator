import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-course-sorting',
  standalone: true,
  templateUrl: './course-sorting.component.html',
  styleUrl: './course-sorting.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseSortingComponent {}
