import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageHeaderComponent } from '@shared/ui/page-header';
import { BreadcrumbsComponent } from '@shared/ui/breadcrumbs';
import { ButtonComponent } from '@shared/ui';

import { ReviewService } from '@entities/reviews';
import { RelatedStatisticsComponent, RatingStatisticsComponent } from './components';
import { ReviewSortControlComponent, CreateReviewFormComponent } from '@features/reviews';
import { SchoolService } from '@entities/school';
import { selectRouteParam } from '@shared/lib/route';
import { switchMap } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { AsyncStatusComponent } from '@shared/ui/async-status';

import { RouterLink } from '@angular/router';
import { ReviewListComponent } from '@widgets/review-list/review-list.component';
import { StarComponent } from '@shared/ui/star';

@Component({
  selector: 'app-school-reviews',
  imports: [
    CommonModule,
    AsyncPipe,
    RouterLink,
    PageHeaderComponent,
    BreadcrumbsComponent,
    ButtonComponent,
    ReviewListComponent,
    CreateReviewFormComponent,
    AsyncStatusComponent,
    ReviewSortControlComponent,
    StarComponent,
    RelatedStatisticsComponent,
    RatingStatisticsComponent,
  ],
  standalone: true,
  templateUrl: './school-reviews.component.html',
  styleUrl: './school-reviews.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolReviewsComponent {
  public readonly schoolService = inject(SchoolService);
  public readonly reviewService = inject(ReviewService);
  public readonly schoolId$ = selectRouteParam('id');

  onSortChange(value: 'asc' | 'desc') {
    console.log('Новая сортировка:', value);
  }

  public readonly reviews$ = this.schoolId$.pipe(
    switchMap((id) => this.reviewService.getBySchoolIdWithRefresh$(id)),
  );

  public readonly school$ = this.schoolId$.pipe(
    switchMap((id) => this.schoolService.getById$(id)),
  );

  public readonly ratingStats$ = this.schoolId$.pipe(
    switchMap((id) => this.reviewService.getSchoolRatingStats$(id)),
  );
}
