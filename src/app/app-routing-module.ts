import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/index-page/index-page.module').then((m) => m.IndexPageModule),
  },
  {
    path: 'online-courses',
    loadChildren: () =>
      import('./modules/online-courses/online-courses-module').then((m) => m.OnlineCoursesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
