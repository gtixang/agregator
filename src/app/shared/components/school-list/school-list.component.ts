import { Component, Input } from '@angular/core';
import { School } from '@data-access/schools/types';
import { AsyncData } from '@shared/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-school-list',
  standalone: false,
  templateUrl: './school-list.component.html',
  styleUrl: './school-list.component.scss',
})
export class SchoolListComponent {
  @Input({ required: true }) schools$!: Observable<AsyncData<School[]>>;
  @Input() schoolBorder?: string = 'none';
}
