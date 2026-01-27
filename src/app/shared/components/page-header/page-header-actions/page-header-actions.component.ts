import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header-actions',
  standalone: false,
  templateUrl: './page-header-actions.component.html',
  styleUrl: './page-header-actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeaderActionsComponent {
  @Input() ratingAvg!: number;
  @Input() reviewCount!: number;
}
