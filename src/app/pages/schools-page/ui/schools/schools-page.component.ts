import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SchoolService } from '@data-access/schools';
import { SchoolLine } from '@data-access/schools/types';
import { AsyncData } from '@shared/models';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';

import { CategoriesFilterComponent } from '@features/categories-filter';
import { SchoolListComponent } from '@widgets/school-list';
import { BreadcrumbsComponent } from '@widgets/breadcrumbs';
import { PageTitleComponent } from '@shared/ui/page-title';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-schools-page',
  standalone: true,
  imports: [
    AsyncPipe,
    BreadcrumbsComponent,
    SchoolListComponent,
    CategoriesFilterComponent,
    PageTitleComponent,
  ],
  templateUrl: './schools-page.component.html',
  styleUrl: './schools-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolsPageComponent {
  public readonly schoolService = inject(SchoolService);

  public schoolLines$!: Observable<AsyncData<SchoolLine[]>>;

  public reload$ = new BehaviorSubject(null);

  ngOnInit() {
    this.schoolLines$ = this.reload$.pipe(
      switchMap(() => this.schoolService.getSchoolLines$()),
    );
  }
}
