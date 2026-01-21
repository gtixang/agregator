import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-course-categories',
  standalone: false,
  templateUrl: './course-categories.component.html',
  styleUrl: './course-categories.component.scss',
})
export class CourseCategoriesComponent {
  @Input({ required: true }) title!: string;
}
