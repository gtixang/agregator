import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type RangeValuesPosition = 'top' | 'bottom';

export interface RangeValue {
  from: number;
  to: number;
}

@Component({
  selector: 'app-range',
  standalone: false,
  templateUrl: './range.component.html',
  styleUrl: './range.component.scss',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RangeComponent), multi: true },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RangeComponent implements ControlValueAccessor {
  @Input({ required: true }) min!: number;
  @Input({ required: true }) max!: number;
  @Input({ required: true }) valuesPosition!: RangeValuesPosition;

  public value: RangeValue = { from: this.min, to: this.max };

  public disabled = false;

  private onChange(value: RangeValue) {}
  private onTouched = () => {};

  writeValue(value: RangeValue): void {
    if (!value) return;
    this.value = value;
  }

  registerOnChange(fn: (value: RangeValue) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onFromChange(from: number) {
    const newValue = { ...this.value, from };
    this.emitValue(newValue);
  }
  onToChange(to: number) {
    const newValue = { ...this.value, to };
    this.emitValue(newValue);
  }

  private emitValue(value: RangeValue) {
    this.value = value;
    this.onChange(this.value);
    this.onTouched();
  }
}
