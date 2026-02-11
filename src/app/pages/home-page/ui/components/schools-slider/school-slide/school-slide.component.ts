import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SchoolPreview } from '@data-access/schools/types';

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
