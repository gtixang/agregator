import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tab-navigation',
  standalone: false,
  templateUrl: './tab-navigation.component.html',
  styleUrl: './tab-navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabNavigationComponent {}
