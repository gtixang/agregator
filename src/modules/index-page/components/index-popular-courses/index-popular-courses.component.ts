import { Component } from '@angular/core';
import { Course } from '../../../shared/interfaces';
import { courses } from './courses.data';

@Component({
  selector: 'app-index-popular-courses',
  standalone: false,
  templateUrl: './index-popular-courses.component.html',
  styleUrl: './index-popular-courses.component.scss',
})
export class IndexPopularCoursesComponent {
  public coursesList: Course[] = courses;
}
