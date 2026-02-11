import { Component, Input } from '@angular/core';
import { Price } from '@data-access/courses/types';

@Component({
  selector: 'app-course-pricing',
  imports: [],
  templateUrl: './course-pricing.component.html',
  styleUrl: './course-pricing.component.scss',
})
export class CoursePricingComponent {
  @Input({ required: true }) pricing!: Price[];
}
