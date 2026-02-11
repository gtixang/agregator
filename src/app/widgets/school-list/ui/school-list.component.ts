import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { SchoolLine } from '@data-access/schools/types';
import { AsyncData } from '@shared/models';
import { Observable } from 'rxjs';
import { SchoolLineComponent } from '@entities/school/ui/composites/school-line';

@Component({
  selector: 'app-school-list',
  standalone: true,
  imports: [SchoolLineComponent],
  templateUrl: './school-list.component.html',
  styleUrl: './school-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolListComponent {
  @Input({ required: true }) schoolLines!: SchoolLine[];
}
