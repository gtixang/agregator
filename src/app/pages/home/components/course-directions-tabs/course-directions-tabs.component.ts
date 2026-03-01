import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  AfterViewInit,
} from '@angular/core';
import {
  COURSE_DIRECTIONS_CONTENT_ITEMS,
  COURSE_DIRECTIONS_NAV_ITEMS,
} from '@pages/home/constants';

import { CourseDirectionsList, CourseDirectionsNav } from '@pages/home/models';

@Component({
  selector: 'app-course-directions-tabs',
  standalone: true,
  templateUrl: './course-directions-tabs.component.html',
  styleUrl: './course-directions-tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseDirectionsTabsComponent implements AfterViewInit {
  @ViewChildren('navItem') navItems!: QueryList<ElementRef>;
  @ViewChildren('contentItem') contentItems!: QueryList<ElementRef>;

  public readonly directionsNavItems: CourseDirectionsNav[] = COURSE_DIRECTIONS_NAV_ITEMS;
  public readonly directionsContentItems: CourseDirectionsList[] =
    COURSE_DIRECTIONS_CONTENT_ITEMS;

  ngOnInit() {}

  ngAfterViewInit() {
    this.setInitialActiveElements();
  }

  public setInitialActiveElements() {
    this.navItems.first.nativeElement.classList.add('is-active');
    this.contentItems.first.nativeElement.classList.add('is-active');
  }
}
