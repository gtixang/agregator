import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHeaderComponent } from '@shared/ui/page-header';
import { BreadcrumbsComponent } from '@shared/ui/breadcrumbs';
import { ButtonComponent } from '@shared/ui';
import { SchoolRatingComponent } from '@entities/school/ui/school-rating';

import { CreateReviewFormComponent } from '@features/create-review/ui/create-review-form';
import { ReviewCardComponent, ReviewStatsComponent } from '@entities/reviews';
import { OtherSchoolReviewsComponent } from './components/other-school-reviews';
import { ReviewsControlsComponent } from '@features/reviews';

@Component({
  selector: 'app-school-reviews',
  imports: [
    PageHeaderComponent,
    BreadcrumbsComponent,
    ButtonComponent,
    SchoolRatingComponent,
    OtherSchoolReviewsComponent,
    ReviewCardComponent,
    CreateReviewFormComponent,
    ReviewStatsComponent,
    ReviewsControlsComponent,
  ],
  standalone: true,
  templateUrl: './school-reviews.component.html',
  styleUrl: './school-reviews.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolReviewsComponent {
  public review = [];
}
