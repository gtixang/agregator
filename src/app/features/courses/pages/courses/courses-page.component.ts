import { ChangeDetectionStrategy, Component } from '@angular/core';
import { POPULAR_COURSES_ITEMS } from '@shared/constants';
import { SCHOOL_LIST_ITEMS } from '@shared/constants';

@Component({
  selector: 'app-courses-page',
  standalone: false,
  templateUrl: './courses-page.component.html',
  styleUrl: './courses-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesPageComponent {
  public courses: any[] = POPULAR_COURSES_ITEMS;
  public schools: any[] = SCHOOL_LIST_ITEMS;
}
