import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-schools-page',
  standalone: false,
  templateUrl: './schools-page.component.html',
  styleUrl: './schools-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolsPageComponent {}
