import { SCHOOL_BASE_FIELDS } from '@data-access/schools/constants';

export const COURSES_TABLE = 'courses';

export const COURSES_SELECT = `
  name,
  availability,
  duration_months,
  course_slug,
  direction_slug,
  levels(name, code),
  prices(old, current, credit),
  course_has_features(
   features(title, icon)
  ),
  course_has_directions(
   directions(title, slug)
  ),
  school:schools(${SCHOOL_BASE_FIELDS})
`;
