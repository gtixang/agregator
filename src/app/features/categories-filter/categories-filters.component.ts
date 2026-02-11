import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CheckboxComponent } from '@shared/ui';

@Component({
  selector: 'app-categories-filters',
  standalone: true,
  imports: [ReactiveFormsModule, CheckboxComponent],
  templateUrl: './categories-filters.component.html',
  styleUrl: './categories-filters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesFilterComponent implements OnInit {
  public fb = new FormBuilder();

  public readonly form = this.fb.group({
    programming: [false, Validators.required],
    marketing: [false, Validators.required],
    design: [false, Validators.required],
    analytics: [false, Validators.required],
    management: [false, Validators.required],
    contentCreation: [false, Validators.required],
    languages: [false, Validators.required],
    softSkills: [false, Validators.required],
    finance: [false, Validators.required],
    businessEducation: [false, Validators.required],
    photography: [false, Validators.required],
    higherEducation: [false, Validators.required],
  });

  ngOnInit() {
    this.form.valueChanges.subscribe((res) => console.log(res));
  }
}
