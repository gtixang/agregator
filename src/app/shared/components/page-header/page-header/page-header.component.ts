import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface ReviewsCount {
  count: number;
}

export interface School {
  id: string;
  name: string;
  description: string;
  rating_avg: number;
  reviews_count: ReviewsCount[];
}

@Component({
  selector: 'app-page-header',
  standalone: false,
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeaderComponent {
  @Input() title!: string;
}
