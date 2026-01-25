import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CourseCategoryFiltersComponent } from './components';
import { SchoolsPageComponent, SchoolDetailComponent } from './pages';
import { SharedModule } from '@shared/shared.module';

const routes: Route[] = [
  { path: '', component: SchoolsPageComponent },
  { path: ':id', component: SchoolDetailComponent },
];

@NgModule({
  declarations: [
    CourseCategoryFiltersComponent,
    SchoolsPageComponent,
    SchoolDetailComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class SchoolModule {}
