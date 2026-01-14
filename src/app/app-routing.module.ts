import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@features/home').then((m) => m.HomeModule),
  },
  {
    path: 'courses',
    loadChildren: () => import('@features/courses').then((m) => m.CourseModule),
    data: { breadcrumb: 'Онлайн-курсы' },
  },
  {
    path: 'schools',
    loadChildren: () => import('@features/schools').then((m) => m.SchoolModule),
    data: { breadcrumb: 'Онлайн-школы' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
