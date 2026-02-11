import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  Input,
  Signal,
} from '@angular/core';

import { toSignal } from '@angular/core/rxjs-interop';
import { SchoolPreview } from '@data-access/schools/types';
import { SLIDE_FULL_WIDTH } from '@pages/home-page/constants';
import { AsyncData, AsyncStatus } from '@shared/models';
import { Observable } from 'rxjs';
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
  @Input({ required: true }) schoolsData!: AsyncData<SchoolPreview[]>;

  @Input() visibleSlides = 4;

  public currentIndex = 0;

  get transform(): string {
    return `translateX(-${this.currentIndex * SLIDE_FULL_WIDTH}px)`;
  }

  get maxIndex(): number {
    const dataLength =
      this.schoolsData.status === AsyncStatus.READY ? this.schoolsData.data.length : 0;
    return Math.max(0, dataLength - this.visibleSlides);
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
