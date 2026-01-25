import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Course } from '@data-access/courses/types';
import { AsyncData } from '@shared/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-list',
  standalone: false,
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListComponent {
  @Input() courses$!: Observable<AsyncData<Course[]>>;
  @Input({ required: true }) showLoadMore = false;
  @Input({ required: true }) cardPadding = '20px 50px';
}
