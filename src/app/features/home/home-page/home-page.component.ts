import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { SchoolService } from '@data-access/schools';
import { SchoolPreview } from '@data-access/schools/types';
import { AsyncData } from '@shared/models';

@Component({
  selector: 'app-home-page',
  standalone: false,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  private readonly schoolService = inject(SchoolService);

  public reload$ = new BehaviorSubject(null);
  public schools$!: Observable<AsyncData<SchoolPreview[]>>;

  ngOnInit() {
    this.schools$ = this.reload$.pipe(
      switchMap(() => this.schoolService.getSchoolsPreview$()),
    );
  }
}
