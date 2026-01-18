import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-schools-slider',
  standalone: false,
  templateUrl: './schools-slider.component.html',
  styleUrl: './schools-slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolsSliderComponent {}
