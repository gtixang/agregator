import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ButtonComponent } from '@shared/ui';

import { courseFeatures } from '@shared/mappers/course.mapper';

import { SchoolRatingComponent } from '@entities/school/ui/school-rating';
import { CourseFeatureVM, CourseLine } from '../../model/course-line.model';

@Component({
  selector: 'app-course-line',
  standalone: true,
  imports: [RouterLink, ButtonComponent, SchoolRatingComponent],
  templateUrl: './course-line.component.html',
  styleUrl: './course-line.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseLineComponent {
  @Input() course!: CourseLine;
  public courseFeatures!: CourseFeatureVM[];

  ngOnInit() {
    this.courseFeatures = courseFeatures(this.course);
  }
}
