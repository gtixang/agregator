import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  SchoolRatingComponent,
  SchoolReviewsCountLinkComponent,
} from '@entities/school/index';
import { SchoolNameComponent } from '../../primitives/school-name/school-name.component';

@Component({
  selector: 'app-school-summary',
  standalone: true,
  imports: [SchoolReviewsCountLinkComponent, SchoolRatingComponent, SchoolNameComponent],
  templateUrl: './school-summary.component.html',
  styleUrl: './school-summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolSummaryComponent {
  @Input() schoolName!: string;
  @Input({ required: true }) ratingAvg!: number;
  @Input({ required: true }) reviewCount!: number;
}
