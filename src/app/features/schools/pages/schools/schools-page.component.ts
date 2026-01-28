import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SchoolService } from '@data-access/schools';
import { School } from '@data-access/schools/types';
import { AsyncData } from '@shared/models';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-schools-page',
  standalone: false,
  templateUrl: './schools-page.component.html',
  styleUrl: './schools-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolsPageComponent {
  public readonly schoolService = inject(SchoolService);

  public schools$!: Observable<AsyncData<School[]>>;

  public reload$ = new BehaviorSubject(null);

  ngOnInit() {
    this.schools$ = this.reload$.pipe(
      switchMap(() => this.schoolService.getSchoolsList$()),
    );
  }
}
