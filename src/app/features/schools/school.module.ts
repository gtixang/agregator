import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { CommonUiModule } from '@features/common-ui';

import { SchoolsPageComponent } from './pages';
import { SchoolListComponent, CourseCategoryFiltersComponent } from './components';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Route[] = [{ path: '', component: SchoolsPageComponent }];

@NgModule({
  declarations: [
    SchoolListComponent,
    CourseCategoryFiltersComponent,
    SchoolsPageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CommonUiModule,
    RouterModule.forChild(routes),
  ],
})
export class SchoolModule {}
