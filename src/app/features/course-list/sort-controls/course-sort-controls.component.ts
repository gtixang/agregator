import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-course-sort-controls',
  standalone: true,
  templateUrl: './course-sort-controls.component.html',
  styleUrl: './course-sort-controls.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseSortControlsComponent {}
