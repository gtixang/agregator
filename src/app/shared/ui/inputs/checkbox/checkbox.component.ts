/* eslint-disable @typescript-eslint/no-unused-vars */

import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  standalone: false,
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
  checked = false;
  disabled = false;

  /* eslint @typescript-eslint/no-empty-function: "off" */
  private onChange(value: boolean) {}
  private onTouched = () => {};

  writeValue(value: boolean): void {
    this.checked = value;
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
