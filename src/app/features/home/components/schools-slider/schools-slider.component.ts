import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { AsyncState } from '@shared/interfaces/async-state.interface';

import { HomeService } from '@features/home/data-access/home.service';

export interface School {
  id: number;
  name: string;
  logo_url: string;
}

@Component({
  selector: 'app-schools-slider',
  standalone: false,
  templateUrl: './schools-slider.component.html',
  styleUrl: './schools-slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolsSliderComponent {
  private readonly homeService = inject(HomeService);
  public schools$!: Observable<AsyncState<School[]>>;
  public reload$ = new BehaviorSubject(null);

  ngOnInit() {
    this.schools$ = this.reload$.pipe(
      switchMap(() => this.homeService.getSchoolLogosState()),
    );
  }
}
