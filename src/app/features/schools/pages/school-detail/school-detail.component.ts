import { ChangeDetectionStrategy, Component } from '@angular/core';
import { POPULAR_COURSES_ITEMS } from '@shared/constants';

@Component({
  selector: 'app-school-detail',
  standalone: false,
  templateUrl: './school-detail.component.html',
  styleUrl: './school-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolDetailComponent {
  public courses: any[] = POPULAR_COURSES_ITEMS;
}
