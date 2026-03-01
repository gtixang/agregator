import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { SchoolLineComponent, SchoolLine } from '@entities/school';

@Component({
  selector: 'app-school-list',
  standalone: true,
  imports: [SchoolLineComponent],
  templateUrl: './school-list.component.html',
  styleUrl: './school-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolListComponent {
  @Input({ required: true }) schools!: SchoolLine[];
}
