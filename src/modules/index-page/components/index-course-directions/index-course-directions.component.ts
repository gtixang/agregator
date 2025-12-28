import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { COURSE_DIRECTIONS_NAV, COURSE_DIRECTIONS_CONTENT } from './course-directions-nav.data';
import { CourseDirectionsNav, CourseDirectionsList } from '../../interfaces';

@Component({
  selector: 'app-index-course-directions',
  templateUrl: './index-course-directions.component.html',
  styleUrl: './index-course-directions.component.scss',
  standalone: false,
})
export class IndexCourseDirectionsComponent {
  @ViewChildren('navItem') navItems!: QueryList<ElementRef>;
  @ViewChildren('contentItem') contentItems!: QueryList<ElementRef>;

  public readonly nav: CourseDirectionsNav[] = COURSE_DIRECTIONS_NAV;
  public readonly content: CourseDirectionsList[] = COURSE_DIRECTIONS_CONTENT;

  ngAfterViewInit() {
    this.setInitialActiveElements();
  }

  public setInitialActiveElements() {
    this.navItems.first.nativeElement.classList.add('is-active');
    this.contentItems.first.nativeElement.classList.add('is-active');
  }

  onNavHover = (event: Event) => this.setActiveNavContent(this.getTarget(event));

  public getTarget(event: Event): string | null {
    const element = event.target as HTMLElement;
    return element.getAttribute('data-list-target'!);
  }

  public setActiveNavContent(target: string | null) {
    if (!target) return;

    const groups = [
      { items: this.navItems, attr: 'data-list-target' },
      { items: this.contentItems, attr: 'data-list-name' },
    ];
    groups.forEach(({ items, attr }) => {
      items.forEach((el: ElementRef) => {
        el.nativeElement.classList.toggle(
          'is-active',
          el.nativeElement.getAttribute(attr) === target
        );
      });
    });
  }
}
