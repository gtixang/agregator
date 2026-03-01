import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { SchoolCategoryFilterComponent } from '@features/school-category-filter';
import { SchoolListComponent } from '@widgets/school-list';

import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from '@shared/ui/breadcrumbs';

import { PageHeaderComponent } from '@shared/ui/page-header';
import { AsyncData } from '@shared/models';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { SchoolLine, SchoolService } from '@entities/school';
import { AsyncStatusComponent } from '@shared/ui/async-status';
import { PaginationComponent } from '@shared/ui/pagination';

@Component({
  selector: 'app-online-schools',
  standalone: true,
  imports: [
    CommonModule,
    BreadcrumbsComponent,
    SchoolListComponent,
    SchoolCategoryFilterComponent,
    PageHeaderComponent,
    AsyncStatusComponent,
    PaginationComponent,
  ],
  templateUrl: './online-schools.component.html',
  styleUrl: './online-schools.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnlineSchoolsComponent {
  public readonly schoolService = inject(SchoolService);

  public schools$!: Observable<AsyncData<SchoolLine[]>>;
  public readonly reload$ = new BehaviorSubject(null);

  ngOnInit() {
    this.schools$ = this.reload$.pipe(switchMap(() => this.schoolService.getAll$()));
  }
}
