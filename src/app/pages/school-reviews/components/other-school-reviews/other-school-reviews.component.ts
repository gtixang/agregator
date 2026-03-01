import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OtherSchoolsReviewsLine } from '@entities/school';

@Component({
  selector: 'app-other-school-reviews',
  imports: [],
  standalone: true,
  templateUrl: './other-school-reviews.component.html',
  styleUrl: './other-school-reviews.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtherSchoolReviewsComponent {
  public otherSchoolsReviews: OtherSchoolsReviewsLine[] = [
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
