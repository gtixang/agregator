import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-reviews-controls',
  imports: [],
  standalone: true,
  templateUrl: './reviews-controls.component.html',
  styleUrl: './reviews-controls.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewsControlsComponent {}
