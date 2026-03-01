import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { SchoolLine } from '../../model/school-line.model';

import { ButtonComponent } from '@shared/ui';
import { SchoolRatingComponent } from '@entities/school/ui/school-rating';

@Component({
  selector: 'app-school-line',
  standalone: true,
  imports: [ButtonComponent, SchoolRatingComponent],
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
