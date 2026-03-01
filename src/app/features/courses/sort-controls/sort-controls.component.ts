import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sort-controls',
  standalone: true,
  templateUrl: './sort-controls.component.html',
  styleUrl: './sort-controls.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortControlsComponent {}
