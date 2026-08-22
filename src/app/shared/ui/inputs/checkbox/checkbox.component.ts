/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  ChangeDetectorRef,
  inject,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent implements ControlValueAccessor {
  public cdr = inject(ChangeDetectorRef);
  public checked = false;
  public disabled = false;

  private onChange(value: boolean) {}
  private onTouched = () => {};

  writeValue(value: boolean): void {
    this.checked = value;
    this.cdr.markForCheck();
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  toggle(): void {
    if (this.disabled) {
      return;
    }

    this.checked = !this.checked;
    this.onChange(this.checked);
    this.onTouched();
  }
}
