import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-school-name',
  standalone: true,
  imports: [],
  templateUrl: './school-name.component.html',
  styleUrl: './school-name.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolNameComponent {
  @Input({ required: true }) schoolName!: string;
}
