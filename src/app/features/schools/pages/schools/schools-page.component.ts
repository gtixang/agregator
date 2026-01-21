import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SCHOOL_LIST_ITEMS } from '@shared/constants';

@Component({
  selector: 'app-schools-page',
  standalone: false,
  templateUrl: './schools-page.component.html',
  styleUrl: './schools-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolsPageComponent {
  public schools: any[] = SCHOOL_LIST_ITEMS;
}
