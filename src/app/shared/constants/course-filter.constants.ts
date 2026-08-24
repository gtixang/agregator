import { CourseFilters } from '@entities/course';

export const INITIAL_COURSES_FILTER: CourseFilters = {
  payment: {
    paid: false,
    free: false,
  },
  price: { from: 0, to: 200000 },
  schools: {
    'fa4e6b2b-b294-43f6-b9df-253042f62d89': false,
    '52b13618-f7f8-48b5-b57c-d1132df04823': false,
    '7aec4d3a-43e8-4f3c-8dce-afba64c4fc0d': false,
  },
  level: {
    junior: false,
    middle: false,
    senior: false,
    children: false,
  },
  durationMonths: { from: 1, to: 12 },
  additional: {
    internship: false,
    certificate: false,
  },
};
