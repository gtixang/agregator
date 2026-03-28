import { Direction } from './direction.dto';
import { Certification } from './certification.dto';
import { Price } from './price.dto';
import { Level } from './level.dto';
import { SchoolSummaryDTO } from '@entities/school';

export interface CourseHasDirection {
  directions: Direction;
}

export interface CourseDTO {
  id: string;
  name: string;
  availability: boolean;
  has_internship: boolean;
  duration_months: number;
  course_slug: string;
  direction_slug: string;
  levels: Level;
  prices: Price[];
  certification_type: Certification;
  course_has_directions: CourseHasDirection[];
  school: SchoolSummaryDTO;
}
