import { SCHOOL_BASE_FIELDS } from '@data-access/schools/constants';

export const COURSES_TABLE = 'courses';

export const COURSE_LINE_SELECT = `
  id,
  name,
  availability,
  duration_months,
  course_slug,
  direction_slug,
  levels(name, code),
  has_internship,
  prices(old, current, credit),
  certification_type(code, name),
  course_has_directions(
   directions(title, slug)
  ),
  school:schools(${SCHOOL_BASE_FIELDS})
`;
