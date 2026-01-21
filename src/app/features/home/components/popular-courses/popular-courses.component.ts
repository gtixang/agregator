import { ChangeDetectionStrategy, Component } from '@angular/core';
import { POPULAR_COURSES_ITEMS } from '@shared/constants';

@Component({
  selector: 'app-popular-courses',
  standalone: false,
  templateUrl: './popular-courses.component.html',
  styleUrl: './popular-courses.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopularCoursesComponent {
  public courses: any[] = POPULAR_COURSES_ITEMS;
}
