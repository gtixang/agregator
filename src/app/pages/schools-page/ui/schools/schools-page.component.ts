import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SchoolService } from '@data-access/schools';
import { SchoolLine } from '@data-access/schools/types';
import { AsyncData } from '@shared/models';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';

import { CategoriesFilterComponent } from '@features/categories-filter';
import { SchoolListComponent } from '@widgets/school-list';

import { PageTitleComponent } from '@shared/ui/page-title';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { BreadcrumbsComponent } from '@shared/ui/breadcrumbs';
import { PaginationComponent } from '@shared/ui/pagination';
import { AsyncStatusComponent } from '@shared/ui/async-status';

@Component({
  selector: 'app-schools-page',
  standalone: true,
  imports: [
    AsyncPipe,
    CommonModule,
    BreadcrumbsComponent,
    SchoolListComponent,
    CategoriesFilterComponent,
    PageTitleComponent,
    PaginationComponent,
    AsyncStatusComponent,
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
