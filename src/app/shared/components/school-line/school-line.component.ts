import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { School } from '@data-access/schools/types';

@Component({
  selector: 'app-school-line',
  standalone: false,
  templateUrl: './school-line.component.html',
  styleUrl: './school-line.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolLineComponent {
  @Input({ required: true }) school!: School;
}
