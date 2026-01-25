import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-school-detail',
  standalone: false,
  templateUrl: './school-detail.component.html',
  styleUrl: './school-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolDetailComponent {
  public courses: any[] = [];
}
