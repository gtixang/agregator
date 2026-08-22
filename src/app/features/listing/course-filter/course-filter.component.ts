import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CheckboxComponent, RangeComponent } from '@shared/ui';

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

  private readonly defaultValues = {
    payment: {
      paid: false,
      free: false,
    },
    price: { from: 0, to: 157800 },
    schools: {
      skillbox: false,
      geekbrains: false,
      IMBA: false,
      loftSchool: false,
      convertMonster: false,
    },
    difficultyLevel: {
      beginner: false,
      intermediate: false,
      expert: false,
      children: false,
    },
    durationMonths: { from: 1, to: 9 },
    additionalOpportunities: {
      internshipAvailable: false,
      certificateAvailable: false,
    },
  };

  public readonly form = this.fb.group({
    payment: this.fb.group({
      paid: [false, Validators.required],
      free: [false, Validators.required],
    }),

    price: this.fb.control({ from: 0, to: 200000 }, { validators: Validators.required }),

    schools: this.fb.group({
      skillbox: [false, Validators.required],
      geekbrains: [false, Validators.required],
      IMBA: [false, Validators.required],
      loftSchool: [false, Validators.required],
      convertMonster: [false, Validators.required],
    }),

    difficultyLevel: this.fb.group({
      beginner: [false, Validators.required],
      intermediate: [false, Validators.required],
      expert: [false, Validators.required],
      children: [false, Validators.required],
    }),
    durationMonths: this.fb.control(
      { from: 1, to: 12 },
      { validators: Validators.required },
    ),
    additionalOpportunities: this.fb.group({
      internshipAvailable: [false],
      certificateAvailable: [false],
    }),
  });

  ngOnInit() {
    this.form.reset(this.defaultValues);

    this.form.valueChanges.subscribe((res) => console.log(res));
  }

  resetForm() {
    this.form.reset(this.defaultValues);
  }
}
