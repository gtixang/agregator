import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { CommonUiModule } from '@features/common-ui';

import { SchoolsPageComponent } from './pages';
import { SchoolListComponent } from './components';

const routes: Route[] = [{ path: '', component: SchoolsPageComponent }];

@NgModule({
  declarations: [SchoolListComponent, SchoolsPageComponent],
  imports: [CommonModule, CommonUiModule, RouterModule.forChild(routes)],
})
export class SchoolModule {}
