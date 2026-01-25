import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-school-list',
  standalone: false,
  templateUrl: './school-list.component.html',
  styleUrl: './school-list.component.scss',
})
export class SchoolListComponent {
  @Input({ required: true }) schools!: any;
}
