import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header-content',
  standalone: false,
  templateUrl: './page-header-content.component.html',
  styleUrl: './page-header-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeaderContentComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) description!: string;
}
