import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-school-filter',
  standalone: false,
  templateUrl: './school-filter.component.html',
  styleUrl: './school-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolFilterComponent {
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
