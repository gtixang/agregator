import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  AfterViewInit,
} from '@angular/core';
import {
  COURSE_DIRECTIONS_NAV_ITEMS,
  COURSE_DIRECTIONS_CONTENT_ITEMS,
} from './course-directions-nav.data';
import { CourseDirectionsNav, CourseDirectionsList } from '../../interfaces';

@Component({
  selector: 'app-course-directions',
  standalone: false,
  templateUrl: './course-directions.component.html',
  styleUrl: './course-directions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseDirectionsComponent implements AfterViewInit {
  @ViewChildren('navItem') navItems!: QueryList<ElementRef>;
  @ViewChildren('contentItem') contentItems!: QueryList<ElementRef>;

  public readonly directionsNavItems: CourseDirectionsNav[] = COURSE_DIRECTIONS_NAV_ITEMS;
  public readonly directionsContentItems: CourseDirectionsList[] =
    COURSE_DIRECTIONS_CONTENT_ITEMS;

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
    if (!target) {
      return;
    }

    const groups = [
      { items: this.navItems, attr: 'data-list-target' },
      { items: this.contentItems, attr: 'data-list-name' },
    ];
    groups.forEach(({ items, attr }) => {
      items.forEach((el: ElementRef) => {
        el.nativeElement.classList.toggle(
          'is-active',
          el.nativeElement.getAttribute(attr) === target,
        );
      });
    });
  }
}
