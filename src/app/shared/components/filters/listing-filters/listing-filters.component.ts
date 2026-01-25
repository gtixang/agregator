import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-listing-filters',
  standalone: false,
  templateUrl: './listing-filters.component.html',
  styleUrl: './listing-filters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingFiltersComponent implements OnInit {
  public fb = new FormBuilder();

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
    this.form.patchValue(
      {
        price: { from: 0, to: 157800 },
        durationMonths: { from: 1, to: 9 },
      },
      { emitEvent: false },
    );

    this.form.valueChanges.subscribe((res) => console.log(res));
  }
}
