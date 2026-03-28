import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { SchoolLine } from '../../model';
import { ButtonComponent, StarComponent } from '@shared/ui';

@Component({
  selector: 'app-school-line',
  standalone: true,
  imports: [ButtonComponent, StarComponent],
  templateUrl: './school-line.component.html',
  styleUrl: './school-line.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolLineComponent {
  @Input({ required: true }) school!: SchoolLine;

  get fullName(): string {
    if (this.school.transliteration) {
      return `${this.school.name} (${this.school.transliteration})`;
    }
    return this.school.name;
  }
}
