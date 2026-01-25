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

import { HomePageComponent } from './home-page';
import { SharedModule } from '@shared/shared.module';

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
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
