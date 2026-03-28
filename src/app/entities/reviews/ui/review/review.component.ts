import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Review } from '@entities/reviews';
import { RelativeDatePipe } from '@shared/lib';
import { StarComponent } from '@shared/ui';

@Component({
  selector: 'app-review',
  imports: [RelativeDatePipe, StarComponent],
  standalone: true,
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewComponent {
  @Input({ required: true }) review!: Review;
  public stars = Array(5);
}
