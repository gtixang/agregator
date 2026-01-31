import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';

import { SchoolPreview } from '@data-access/schools/types';
import { SLIDE_FULL_WIDTH } from '@features/home/constants';

@Component({
  selector: 'app-schools-slider',
  standalone: false,
  templateUrl: './schools-slider.component.html',
  styleUrl: './schools-slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolsSliderComponent {
  @Input({ required: true }) schools!: SchoolPreview[];

  public readonly renderer = inject(Renderer2);

  @Input() visibleSlides = 4;

  public currentIndex = 0;

  get transform(): string {
    return `translateX(-${this.currentIndex * SLIDE_FULL_WIDTH}px)`;
  }

  prevSlide() {
    this.currentIndex = Math.max(0, this.currentIndex - 1);
  }

  nextSlide() {
    const maxIndex = Math.max(0, this.schools.length - this.visibleSlides);

    this.currentIndex = Math.min(maxIndex, this.currentIndex + 1);
  }
}
