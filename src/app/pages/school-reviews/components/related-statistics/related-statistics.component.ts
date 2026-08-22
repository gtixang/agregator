import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OtherSchoolsReviewsLine } from '@entities/school';
import { StarComponent } from '@shared/ui';

@Component({
  selector: 'app-related-statistics',
  imports: [StarComponent],
  standalone: true,
  templateUrl: './related-statistics.component.html',
  styleUrl: './related-statistics.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RelatedStatisticsComponent {
  public stars = Array(5);
  public related: OtherSchoolsReviewsLine[] = [
    {
      name: 'SkillFactory',
      reviewsCount: 55,
      rating: 5,
    },
    {
      name: 'GeekBrains',
      reviewsCount: 54,
      rating: 3,
    },

    {
      name: 'WayUp',
      reviewsCount: 32,
      rating: 2,
    },
    {
      name: 'Нетология',
      reviewsCount: 30,
      rating: 5,
    },
    {
      name: 'Qtus',
      reviewsCount: 28,
      rating: 3,
    },
    {
      name: 'Convert Monster',
      reviewsCount: 26,
      rating: 3,
    },
  ];
}
