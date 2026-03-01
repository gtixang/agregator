import { SchoolSummaryDTO } from '@entities/school';

export interface Direction {
  slug: string;
  title: string;
}

export interface CourseHasDirection {
  directions: Direction;
}
export interface Certification {
  code: string;
  name: string;
}
export interface Level {
  code: string;
  name: string;
}

export interface Price {
  old: number;
  current: number;
  credit: number;
}

export interface Review {
  id: string;
  text: string;
}

export interface ReviewsCount {
  count: number;
}

export interface CourseSchoolDTO {
  id: string;
  name: string;
  rating_avg: number;
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
