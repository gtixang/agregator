import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { SchoolPreview } from '@data-access/schools/types';
import { SLIDE_FULL_WIDTH } from '@pages/home-page/constants';

import { SchoolSlideComponent } from './school-slide/school-slide.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-schools-slider',
  standalone: true,
  imports: [RouterLink, SchoolSlideComponent],
  templateUrl: './schools-slider.component.html',
  styleUrl: './schools-slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolsSliderComponent {
  @Input({ required: true }) schoolsData!: SchoolPreview[];

  @Input() visibleSlides = 4;

  public currentIndex = 0;

  get transform(): string {
    return `translateX(-${this.currentIndex * SLIDE_FULL_WIDTH}px)`;
  }

  get maxIndex(): number {
    return Math.max(0, this.schoolsData.length - this.visibleSlides);
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  nextSlide() {
    if (this.currentIndex < this.maxIndex) {
      this.currentIndex++;
    }
  }
}
