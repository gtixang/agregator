import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ButtonComponent, StarComponent } from '@shared/ui';

import { CourseFeature, CourseLine } from '../../model';
import { mapCourseToFeatures } from '../../mappers';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-line',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonComponent, StarComponent],
  templateUrl: './course-line.component.html',
  styleUrl: './course-line.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseLineComponent {
  @Input() course!: CourseLine;
  public courseFeatures!: CourseFeature[];

  ngOnInit() {
    this.courseFeatures = mapCourseToFeatures(this.course);
  }
}
