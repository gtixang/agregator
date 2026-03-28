import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',

  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  host: {
    '[class.is-disabled]': 'disabled',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
}
