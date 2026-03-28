import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Review, ReviewComponent } from '@entities/reviews';

@Component({
  selector: 'app-review-list',
  imports: [ReviewComponent],
  standalone: true,
  templateUrl: './review-list.component.html',
  styleUrl: './review-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewListComponent {
  @Input({ required: true }) reviews!: Review[];
}
