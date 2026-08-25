import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CourseCategory, TOPIC_TABS } from './model/topic-tabs.data';
import { CourseService } from '@entities/course';
import { CategoryService } from '@entities/category';
import { AsyncStatusComponent } from '@shared/ui/async-status';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { AsyncData } from '@shared/models';
import { Category } from '@entities/category/model/category.model';

@Component({
  selector: 'app-topics-tabs',
  standalone: true,
  templateUrl: './topics-tabs.component.html',
  styleUrl: './topics-tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, AsyncStatusComponent],
})
export class TopicsTabsComponent {
  public selectedCategory: CourseCategory | null = null;

  public readonly courseService = inject(CourseService);
  private readonly categoryService = inject(CategoryService);
  public readonly reload$ = new BehaviorSubject(null);
  public categories$ = this.categoryService.getAll$();

  public selectCategory(category: CourseCategory): void {
    this.selectedCategory = category;
    this.courseService.setCategory(category);
  }
}
