import { ChangeDetectionStrategy, Component, inject, ViewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReviewService } from '@entities/reviews';
import { selectRouteParam } from '@shared/lib';

import { ButtonComponent, SelectRatingComponent } from '@shared/ui';
import { switchMap, take, tap } from 'rxjs';

@Component({
  selector: 'app-create-review-form',
  imports: [SelectRatingComponent, ReactiveFormsModule, ButtonComponent],
  standalone: true,
  templateUrl: './create-review-form.component.html',
  styleUrl: './create-review-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateReviewFormComponent {
  @ViewChild('stars') selectRatingComponent!: SelectRatingComponent;
  private readonly fb = inject(FormBuilder);
  private readonly reviewService = inject(ReviewService);
  public readonly schoolId$ = selectRouteParam('id');

  public form = this.fb.group(
    {
      authorName: ['', Validators.required],
      title: ['', Validators.required],
      text: ['', Validators.required],
      rating: [0, Validators.required],
    },
    { nonNullable: true },
  );

  onSubmit() {
    if (this.form.valid) {
      this.schoolId$
        .pipe(
          take(1),
          switchMap((schoolId) =>
            this.reviewService
              .createReview$({ ...this.form.value, schoolId })
              .pipe(tap(() => this.reviewService.refreshReviews())),
          ),
        )
        .subscribe({
          next: () => {
            this.resetForm();
          },
          error: (error) => {
            console.error('Create review failed:', error);
          },
        });
    }
  }

  private resetForm() {
    this.selectRatingComponent.resetRating();
    this.form.reset();
  }
}
