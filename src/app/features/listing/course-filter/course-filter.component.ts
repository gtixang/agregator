import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  Input,
} from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxComponent, RangeComponent } from '@shared/ui';
import { INITIAL_COURSES_FILTER } from '@shared/constants/course-filter.constants';
import { CourseFilters, CourseService } from '@entities/course';
import { BehaviorSubject, distinctUntilChanged } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-course-filter',
  standalone: true,
  imports: [ReactiveFormsModule, CheckboxComponent, RangeComponent],
  templateUrl: './course-filter.component.html',
  styleUrl: './course-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseFilterComponent {
  @Input({ required: true }) showSchoolsFilter: boolean = true;
  private readonly fb = inject(NonNullableFormBuilder);
  private destroyRef = inject(DestroyRef);
  public courseService = inject(CourseService);
  public initialCoursesFilter: CourseFilters = INITIAL_COURSES_FILTER;
  public reload$ = new BehaviorSubject(null);

  public readonly form = this.fb.group({
    payment: this.fb.group(this.initialCoursesFilter.payment),
    price: this.fb.control(this.initialCoursesFilter.price),
    schools: this.fb.group(this.initialCoursesFilter.schools),
    level: this.fb.group(this.initialCoursesFilter.level),
    durationMonths: this.fb.control(this.initialCoursesFilter.durationMonths),
    additional: this.fb.group(this.initialCoursesFilter.additional),
  });

  ngOnInit() {
    this.form.valueChanges
      .pipe(
        distinctUntilChanged(
          (prev, curr) => JSON.stringify(prev) === JSON.stringify(curr),
        ),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => {
        this.courseService.updateFilters(this.form.getRawValue());
      });
  }
  onReset() {
    this.form.reset();
  }
}
