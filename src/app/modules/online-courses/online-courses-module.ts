import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  OnlineCoursesComponent,
  OnlineCoursesFilterComponent,
  OnlineCoursesResultComponent,
} from './components';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Route[] = [{ path: '', component: OnlineCoursesComponent }];

@NgModule({
  declarations: [
    OnlineCoursesComponent,
    OnlineCoursesFilterComponent,
    OnlineCoursesResultComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class OnlineCoursesModule {}
