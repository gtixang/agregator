import { CourseDTO, Direction, Feature } from './course.dto';

export type Course = Omit<
  CourseDTO,
  'course_has_features' | 'course_has_directions' | 'duration_months'
> & {
  features: Feature[];
  directions: Direction[];
  duration: number;
};
