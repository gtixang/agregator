import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

@Component({
  selector: 'app-courses-page',
  standalone: false,
  templateUrl: './courses-page.component.html',
  styleUrl: './courses-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesPageComponent {
  // public schools: any[] = SCHOOL_LIST_ITEMS;

  ngOnInit() {
    console.log('init');
  }
}
