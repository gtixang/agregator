import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-rating-input',
  imports: [],
  templateUrl: './rating-input.component.html',
  styleUrl: './rating-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingInputComponent),
      multi: true,
    },
  ],
})
export class RatingInputComponent implements ControlValueAccessor {
  @Input() value = 0;

  @Output() ratingChange = new EventEmitter<number>();

  private onChange = (value: number) => {};
  private onTouched = () => {};

  writeValue(value: number): void {
    this.value = value ?? 0;
  }

  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public stars = Array(5).fill(0);

  public hoverValue: number | null = null;

  setRating(index: number): void {
    this.value = index + 1;
    this.onChange(this.value);
    this.onTouched();
  }
}
