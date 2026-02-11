import { CourseFeatureVM, CourseLine } from '../types';

import { LEVEL_ICON_MAP } from '@entities/course/ui/primitives/course-feature/level-icon.map';

export function mapCourseLineToFeatures(courseLine: CourseLine): CourseFeatureVM[] {
  return [
    { icon: 'calendar', text: `${courseLine.duration} месяца` },
    { icon: LEVEL_ICON_MAP[courseLine.levels.code], text: courseLine.levels.name },
    ...(courseLine.internship ? [{ icon: 'internship', text: 'Стажировка' }] : []),
    { icon: courseLine.certification.code, text: courseLine.certification.name },
  ];
}
