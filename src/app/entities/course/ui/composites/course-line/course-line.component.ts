import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CourseFeatureVM, CourseLine } from '@data-access/courses/types';
import { ButtonComponent } from '@shared/ui';
import { SchoolSummaryComponent } from '@entities/school';
import { CoursePricingComponent } from '../../primitives/course-pricing/course-pricing.component';
import { CourseFeatureComponent } from '../../primitives/course-feature/course-feature.component';
import { CourseAvailabilityBageComponent } from '../../primitives/course-availability-badge/course-availability-bage.component';
import { mapCourseLineToFeatures } from '@data-access/courses';

@Component({
  selector: 'app-course-line',
  standalone: true,
  imports: [
    RouterLink,
    ButtonComponent,
    SchoolSummaryComponent,
    CoursePricingComponent,
    CourseFeatureComponent,
    CourseAvailabilityBageComponent,
  ],
  templateUrl: './course-line.component.html',
  styleUrl: './course-line.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseLineComponent {
  @Input() courseLine!: CourseLine;
  public courseFeatures!: CourseFeatureVM[];

  ngOnInit() {
    this.courseFeatures = mapCourseLineToFeatures(this.courseLine);
  }
}
