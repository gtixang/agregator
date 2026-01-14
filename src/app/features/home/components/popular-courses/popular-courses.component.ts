import { ChangeDetectionStrategy, Component } from '@angular/core';

import { courses } from './courses.data';

@Component({
  selector: 'app-popular-courses',
  standalone: false,
  templateUrl: './popular-courses.component.html',
  styleUrl: './popular-courses.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopularCoursesComponent {
  public coursesList: any[] = courses;
}
