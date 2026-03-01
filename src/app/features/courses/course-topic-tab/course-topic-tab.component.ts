import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-course-topic-tab',
  standalone: true,
  templateUrl: './course-topic-tab.component.html',
  styleUrl: './course-topic-tab.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseTopicTabComponent {}
