import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-rating-display',
  imports: [],
  standalone: true,
  templateUrl: './rating-display.component.html',
  styleUrl: './rating-display.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingDisplayComponent {}
