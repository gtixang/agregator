import { Component } from '@angular/core';
import { StatisticsLine } from '@entities/school';

@Component({
  selector: 'app-review-stats',
  imports: [],
  templateUrl: './review-stats.component.html',
  styleUrl: './review-stats.component.scss',
})
export class ReviewStatsComponent {
  public statistics: StatisticsLine[] = [
    { key: '5 звезд ', value: '45 отзывов' },
    { key: '4 звезды', value: '33 отзыва' },
    { key: '3 звезды', value: '3 отзыва' },
    { key: '2 звезды', value: '2 отзыва' },
    { key: '1 звезда', value: '1 отзыв' },
  ];
}
