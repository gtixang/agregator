import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RatingStatisticsLine } from '@entities/school';

@Component({
  selector: 'app-rating-statistics',
  imports: [],
  standalone: true,
  templateUrl: './rating-statistics.component.html',
  styleUrl: './rating-statistics.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingStatisticsComponent {
  @Input({ required: true }) statistics!: RatingStatisticsLine[];

  ngOnInit() {
    const maxCount = Math.max(...this.statistics.map((s) => s.count));
    const maxWidthPercent = 10;
    this.statistics = this.statistics.map((stat) => ({
      ...stat,
      lineWidth: (stat.count / maxCount) * maxWidthPercent,
      colorClass:
        stat.count > 0 && stat.count === maxCount
          ? 'statistics__value-green'
          : 'statistics__value-gray',
    }));
  }
}
