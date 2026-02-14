import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-school-reviews-count-link',
  standalone: true,
  imports: [],
  templateUrl: './school-reviews-count-link.component.html',
  styleUrl: './school-reviews-count-link.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolReviewsCountLinkComponent {
  @Input({ required: true }) reviewCount!: number;
}
