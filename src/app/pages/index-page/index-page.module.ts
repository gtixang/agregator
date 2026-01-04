import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  IndexAdvantagesComponent,
  IndexBannerComponent,
  IndexBlogPreviewComponent,
  IndexCourseDirectionsComponent,
  IndexPageComponent,
  IndexPopularCoursesComponent,
  IndexSchoolsSliderComponent,
} from './components';
import { SharedModule } from '../../shared/shared.module';
import { Route, RouterModule } from '@angular/router';
import { FeaturesCoursesModule } from '../../features/features.course.module';

const routes: Route[] = [{ path: '', component: IndexPageComponent }];

@NgModule({
  declarations: [
    IndexBannerComponent,
    IndexAdvantagesComponent,
    IndexCourseDirectionsComponent,
    IndexSchoolsSliderComponent,
    IndexPopularCoursesComponent,
    IndexBlogPreviewComponent,
    IndexPageComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes), FeaturesCoursesModule],
})
export class IndexPageModule {}
