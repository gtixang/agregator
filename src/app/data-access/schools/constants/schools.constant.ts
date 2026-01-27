export const SCHOOLS_TABLE = 'schools';

export const SCHOOL_SLIDER_FIELDS = `id, full_logo_url`;

export const SCHOOL_BASE_FIELDS = `
  id,
  name,
  description,
  rating_avg,
  reviews_count:reviews(count)
`;

export const SCHOOL_EXTRA_FIELDS = `
  transliteration,
  school_has_categories(categories(title, slug)),
  categories_count:school_has_categories(count),
  courses_count:courses(count)
`;

export const SCHOOLS_SELECT = `
  ${SCHOOL_BASE_FIELDS},
  ${SCHOOL_EXTRA_FIELDS}
`;
