import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { AsyncData } from '@shared/models/async-data';
import { HomeService, SchoolPreview } from '@data-access/home';

@Component({
  selector: 'app-schools-slider',
  standalone: false,
  templateUrl: './schools-slider.component.html',
  styleUrl: './schools-slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolsSliderComponent {
  private readonly homeService = inject(HomeService);
  public schools$!: Observable<AsyncData<SchoolPreview[]>>;
  public reload$ = new BehaviorSubject(null);

  ngOnInit() {
    this.schools$ = this.reload$.pipe(
      switchMap(() => this.homeService.getSchoolsPreview$()),
    );
  }
}
