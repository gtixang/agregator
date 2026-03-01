import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-course-categories',
  standalone: true,
  templateUrl: './course-categories.component.html',
  styleUrl: './course-categories.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCategoriesComponent {}
