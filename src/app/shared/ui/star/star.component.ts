import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-star',
  imports: [],
  standalone: true,
  templateUrl: './star.component.html',
  styleUrl: './star.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarComponent {
  @Input() filled = false;
}
