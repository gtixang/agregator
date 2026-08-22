import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CheckboxComponent, RangeComponent } from '@shared/ui';
import { INITIAL_COURSES_FILTER } from '@shared/constants/course-filter.constants';

@Component({
  selector: 'app-course-filter',
  standalone: true,
  imports: [ReactiveFormsModule, CheckboxComponent, RangeComponent],
  templateUrl: './course-filter.component.html',
  styleUrl: './course-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseFilterComponent {
  public fb = new FormBuilder();

  public initialCoursesFilter = INITIAL_COURSES_FILTER;

  public readonly form = this.fb.group({
    payment: this.fb.group(this.initialCoursesFilter.payment),
    price: this.fb.control(this.initialCoursesFilter.price),
    schools: this.fb.group(this.initialCoursesFilter.schools),
    difficultyLevel: this.fb.group(this.initialCoursesFilter.difficultyLevel),
    durationMonths: this.fb.control(this.initialCoursesFilter.durationMonths),
    additionalOpportunities: this.fb.group(
      this.initialCoursesFilter.additionalOpportunities,
    ),
  });

  ngOnInit() {
    this.form.patchValue(
      {
        price: { from: 0, to: 157800 },
        durationMonths: { from: 1, to: 9 },
      },
      { emitEvent: false },
    );

    this.form.valueChanges.subscribe((res) => console.log(res));
  }

  onReset() {
    this.form.reset(this.initialCoursesFilter);
  }
}
