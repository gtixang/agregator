import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineCoursesComponent, OnlineCoursesResultComponent } from './components';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { FeaturesCoursesModule } from '../../features/features.course.module';

const routes: Route[] = [{ path: '', component: OnlineCoursesComponent }];

@NgModule({
  declarations: [OnlineCoursesComponent, OnlineCoursesResultComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule, FeaturesCoursesModule],
})
export class OnlineCoursesModule {}
