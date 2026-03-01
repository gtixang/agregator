import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RatingInputComponent } from '../rating-input';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-review-form',
  imports: [RatingInputComponent, ReactiveFormsModule],
  standalone: true,
  templateUrl: './create-review-form.component.html',
  styleUrl: './create-review-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateReviewFormComponent {
  public fb = new FormBuilder();

  public readonly form = this.fb.group({
    authorName: ['', Validators.required],
    title: ['', Validators.required],
    text: ['', Validators.required],
    rating: [0, Validators.required],
  });

  ngOnInit() {
    this.form.valueChanges.subscribe((s) => console.log(s));
  }
}
