import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    title: 'Агрегатор онлайн-курсов',
    loadComponent: () => import('@pages/home-page').then((m) => m.HomePageComponent),
  },
  {
    path: 'courses',
    title: 'Онлайн-курсы',
    loadComponent: () =>
      import('@pages/courses-page').then((m) => m.CoursesPageComponent),
  },
  {
    path: 'schools',
    title: 'Онлайн-школы',
    loadComponent: () =>
      import('@pages/schools-page').then((m) => m.SchoolsPageComponent),
  },
  {
    path: 'schools/:id',
    title: 'Онлайн-школа',
    loadComponent: () =>
      import('@pages/school-details-page').then((m) => m.SchoolDetailsComponent),
  },
];
