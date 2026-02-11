import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CourseFeatureVM } from '@data-access/courses/types';

@Component({
  selector: 'app-course-feature',
  imports: [],
  standalone: true,
  templateUrl: './course-feature.component.html',
  styleUrl: './course-feature.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseFeatureComponent {
  @Input() feature!: CourseFeatureVM;
}
