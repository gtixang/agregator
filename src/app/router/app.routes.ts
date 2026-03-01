import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    title: 'Агрегатор онлайн-курсов',
    loadComponent: () => import('@pages/home').then((m) => m.HomeComponent),
  },
  {
    path: 'courses',
    title: 'Онлайн-курсы',
    loadComponent: () =>
      import('@pages/online-courses').then((m) => m.OnlineCoursesComponent),
    data: { breadcrumb: 'Онлайн-курсы' },
  },
  {
    path: 'schools',
    title: 'Онлайн-школы',
    loadComponent: () =>
      import('@pages/online-schools').then((m) => m.OnlineSchoolsComponent),
    data: { breadcrumb: 'Онлайн-школы' },
  },
  {
    path: 'course/:id',
    title: 'Онлайн-курс',
    loadComponent: () =>
      import('@pages/course-details').then((m) => m.CourseDetailsComponent),
    data: { breadcrumb: 'Курс' },
    // resolve: { course: SchoolResolver },
  },

  {
    path: 'school/:id',
    title: 'Онлайн-школа',
    loadComponent: () =>
      import('@pages/school-courses').then((m) => m.SchoolCoursesComponent),
    data: { breadcrumb: 'Школа' },
    // resolve: { school: SchoolResolver },
  },

  {
    path: 'school/:id/reviews',
    title: 'Отзывы о школе',
    loadComponent: () =>
      import('@pages/school-reviews').then((m) => m.SchoolReviewsComponent),
    data: { breadcrumb: 'Отзывы' },
  },

  {
    path: '**',
    title: 'Страница не найдена',
    loadComponent: () => import('@pages/not-found').then((m) => m.NotFoundComponent),
  },
];
