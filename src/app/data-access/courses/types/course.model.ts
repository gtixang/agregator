import { CourseDTO } from './course.dto';

interface Feature {
  icon: string;
  title: string;
}

interface Direction {
  slug: string;
  title: string;
}

export type Course = Omit<
  CourseDTO,
  'course_has_features' | 'course_has_directions' | 'duration_months'
> & {
  features: Feature[];
  directions: Direction[];
  duration: number;
};
