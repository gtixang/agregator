import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {
  AdvantagesComponent,
  BannerComponent,
  BlogPreviewComponent,
  CourseDirectionsComponent,
  PopularCoursesComponent,
  SchoolsSliderComponent,
} from './components';
import { CommonUiModule } from '@features/common-ui';

import { HomePageComponent } from './home-page';

const routes: Route[] = [{ path: '', component: HomePageComponent }];

@NgModule({
  declarations: [
    BannerComponent,
    AdvantagesComponent,
    CourseDirectionsComponent,
    SchoolsSliderComponent,
    PopularCoursesComponent,
    BlogPreviewComponent,
    HomePageComponent,
  ],
  imports: [CommonModule, CommonUiModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
