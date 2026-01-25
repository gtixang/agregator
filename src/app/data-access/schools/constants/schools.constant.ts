export const SCHOOL_TABLE = 'schools';

export const SCHOOL_SLIDER_FIELDS = `id, name, full_logo_url`;

export const SCHOOL_BASE_FIELDS = `
  id,
  name,
  rating_avg,
  reviews_count:reviews(count)
`;

export const SCHOOL_EXTRA_FIELDS = `
  courses_count,
  topics_count,
  badges(title, slug)  -- например направления
`;

// export const SCHOOLS_SELECT = `
//   ${SCHOOL_BASE_FIELDS},
//   ${SCHOOL_EXTRA_FIELDS}
// `;
