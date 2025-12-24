import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  IndexAdvantagesComponent,
  IndexBannerComponent,
  IndexBlogPreviewComponent,
  IndexCourseDirectionsComponent,
  IndexPopularCoursesComponent,
  IndexSchoolsSliderComponent,
} from './components';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    IndexBannerComponent,
    IndexAdvantagesComponent,
    IndexCourseDirectionsComponent,
    IndexSchoolsSliderComponent,
    IndexPopularCoursesComponent,
    IndexBlogPreviewComponent,
  ],
  exports: [
    IndexBannerComponent,
    IndexAdvantagesComponent,
    IndexCourseDirectionsComponent,
    IndexSchoolsSliderComponent,
    IndexPopularCoursesComponent,
    IndexBlogPreviewComponent,
  ],
  imports: [CommonModule, SharedModule],
})
export class IndexPageModule {}
