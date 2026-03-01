import { CourseDTO, CourseFeatureVM, CourseLine } from '@entities/course';

import { LEVEL_ICON_MAP } from '@shared/constants/level-icons.map';

export function courseFeatures(courseLine: CourseLine): CourseFeatureVM[] {
  return [
    { icon: 'calendar', text: `${courseLine.duration} месяца` },
    { icon: LEVEL_ICON_MAP[courseLine.levels.code], text: courseLine.levels.name },
    ...(courseLine.internship ? [{ icon: 'internship', text: 'Стажировка' }] : []),
    { icon: courseLine.certification.code, text: courseLine.certification.name },
  ];
}

export function mapCourseLineDto(course: CourseDTO): CourseLine {
  return {
    id: course.id,
    name: course.name,
    availability: course.availability,
    duration: course.duration_months,
    course_slug: course.course_slug,
    direction_slug: course.direction_slug,
    levels: course.levels,
    prices: course.prices,
    internship: course.has_internship,
    certification: course.certification_type,
    directions: course.course_has_directions.map((c) => c.directions),
    school: {
      id: course.school.id,
      name: course.school.name,
      ratingAvg: course.school.rating_avg,
      reviewsCount: course.school.reviews_count[0].count,
    },
  };
}
