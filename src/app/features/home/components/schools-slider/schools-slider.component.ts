import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { AsyncData } from '@shared/models/async-data';

import { SchoolService } from '@data-access/schools';
import { SchoolPreview } from '@data-access/schools/types';

@Component({
  selector: 'app-schools-slider',
  standalone: false,
  templateUrl: './schools-slider.component.html',
  styleUrl: './schools-slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolsSliderComponent {
  private readonly schoolService = inject(SchoolService);
  public schools$!: Observable<AsyncData<SchoolPreview[]>>;
  public reload$ = new BehaviorSubject(null);

  ngOnInit() {
    this.schools$ = this.reload$.pipe(
      switchMap(() => this.schoolService.getSchoolsPreview$()),
    );
  }
}
