import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SchoolPreview } from '@entities/school';

@Component({
  selector: 'app-school-slide',
  imports: [],
  standalone: true,
  templateUrl: './school-slide.component.html',
  styleUrl: './school-slide.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolSlideComponent {
  @Input({ required: true }) school!: SchoolPreview;
}
