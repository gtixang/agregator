import { CommonModule, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  TemplateRef,
} from '@angular/core';
import { AsyncData } from '@shared/models';

@Component({
  selector: 'app-async-status',
  standalone: true,
  imports: [CommonModule, NgTemplateOutlet],
  templateUrl: './async-status.component.html',
  styleUrl: './async-status.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsyncStatusComponent<T> {
  @Input({ required: true }) data!: AsyncData<T>;

  @ContentChild(TemplateRef)
  contentTemplate!: TemplateRef<{ $implicit: T }>;
}
