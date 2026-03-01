import { SchoolSummary } from '@entities/school';
import { Certification, CourseDTO, Direction } from '../api/dto/course.dto';

export interface CourseFeatureVM {
  icon: string;
  text: string;
}

export type CourseLine = Omit<
  CourseDTO,
  | 'course_has_directions'
  | 'duration_months'
  | 'certification_type'
  | 'has_internship'
  | 'school'
> & {
  school: SchoolSummary;
  directions: Direction[];
  certification: Certification;
  duration: number;
  internship: boolean;
};
