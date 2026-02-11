import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SchoolLine } from '@data-access/schools/types';
import { ButtonComponent } from '@shared/ui';
import { SchoolSummaryComponent } from '@entities/school';

import { SchoolOverviewComponent } from '../school-overview/school-overview.component';

@Component({
  selector: 'app-school-line',
  standalone: true,
  imports: [ButtonComponent, SchoolSummaryComponent, SchoolOverviewComponent],
  templateUrl: './school-line.component.html',
  styleUrl: './school-line.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolLineComponent {
  @Input({ required: true }) schoolLine!: SchoolLine;
}
