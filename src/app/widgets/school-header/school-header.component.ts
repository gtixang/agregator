import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, switchMap } from 'rxjs';
import { RouterLink } from '@angular/router';
import { AsyncStatusComponent } from '@shared/ui/async-status';
import { PageHeaderComponent } from '@shared/ui/page-header';
import { SchoolRatingComponent } from '@entities/school/ui/school-rating';
import { ButtonComponent } from '@shared/ui';
import { SchoolBase, SchoolService } from '@entities/school';
import { AsyncPipe } from '@angular/common';
import { selectRouteParam } from '@shared/lib/route';
import { AsyncData } from '@shared/models';

@Component({
  selector: 'app-school-header',
  imports: [
    AsyncPipe,
    RouterLink,
    AsyncStatusComponent,
    PageHeaderComponent,
    SchoolRatingComponent,
    ButtonComponent,
  ],
  standalone: true,
  templateUrl: './school-header.component.html',
  styleUrl: './school-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolHeaderComponent {
  public readonly schoolService = inject(SchoolService);
  private readonly reload$ = new BehaviorSubject(null);
  private readonly schoolId$ = selectRouteParam('id');

  public readonly school$: Observable<AsyncData<SchoolBase>> = combineLatest([
    this.reload$,
    this.schoolId$,
  ]).pipe(switchMap(([, id]) => this.schoolService.getById$(id)));
}
