import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CourseLine } from '@data-access/courses/types';
import { AsyncData } from '@shared/models';
import { Observable } from 'rxjs';
import { CourseLineComponent } from '@entities/course';
import { PaginationComponent } from '@widgets/pagination';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CourseLineComponent, PaginationComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListComponent {
  @Input({ required: true }) courseLines!: CourseLine[];

  @Input({ required: true }) showLoadMore = false;
}
