import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Price } from '@data-access/courses/types';

@Component({
  selector: 'app-course-pricing',
  imports: [],
  standalone: true,
  templateUrl: './course-pricing.component.html',
  styleUrl: './course-pricing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursePricingComponent {
  @Input({ required: true }) pricing!: Price[];
}
