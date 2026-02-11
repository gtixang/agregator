import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-categories-tabs',
  standalone: true,
  templateUrl: './categories-tabs.component.html',
  styleUrl: './categories-tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesTabsComponent {}
