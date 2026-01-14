import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-school-card',
  standalone: false,
  templateUrl: './school-card.component.html',
  styleUrl: './school-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolCardComponent {
  @Input({ required: true }) school!: any;
}
