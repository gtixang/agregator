import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-topics-tabs',
  standalone: true,
  templateUrl: './topics-tabs.component.html',
  styleUrl: './topics-tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopicsTabsComponent {}
