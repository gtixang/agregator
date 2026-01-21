import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-list',
  standalone: false,
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListComponent {
  @Input({ required: true }) courses!: any;
  @Input({ required: true }) showLoadMore = false;
  @Input({ required: true }) cardPadding = '20px 50px';
}
