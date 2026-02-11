import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SchoolNameComponent } from '../../primitives/school-name/school-name.component';
import { CategoryDTO, SchoolOverviewVM } from '@data-access/schools/types';

@Component({
  selector: 'app-school-overview',
  standalone: true,
  imports: [SchoolNameComponent],
  templateUrl: './school-overview.component.html',
  styleUrl: './school-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolOverviewComponent {
  @Input({ required: true }) schoolOverview!: SchoolOverviewVM;

  get fullName(): string {
    if (this.schoolOverview.transliteration) {
      return `${this.schoolOverview.name} (${this.schoolOverview.transliteration})`;
    }
    return this.schoolOverview.name;
  }
}
