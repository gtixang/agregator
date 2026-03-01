import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-school-rating',
  standalone: true,
  templateUrl: './school-rating.component.html',
  styleUrl: './school-rating.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolRatingComponent {
  @Input({ required: true }) ratingAvg!: number;
}
