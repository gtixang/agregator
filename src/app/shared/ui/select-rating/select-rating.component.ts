import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostListener,
  inject,
  Input,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { StarComponent } from '@shared/ui/star';

@Component({
  selector: 'app-select-rating',
  imports: [StarComponent],
  standalone: true,
  templateUrl: './select-rating.component.html',
  styleUrl: './select-rating.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectRatingComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectRatingComponent implements ControlValueAccessor {
  public cdr = inject(ChangeDetectorRef);
  public stars = [0, 1, 2, 3, 4];
  @Input() value = 0;

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

  public hoverValue: number | null = null;

  public setRating(index: number): void {
    this.value = index + 1;
    this.onChange(this.value);
    this.onTouched();
  }

  public resetRating() {
    this.hoverValue = null;
    this.value = 0;
    this.cdr.detectChanges();
  }
}
