export interface Feature {
  icon: string;
  title: string;
}

export interface CourseHasFeatures {
  features: Feature;
}

export interface Direction {
  slug: string;
  title: string;
}

export interface CourseHasDirection {
  directions: Direction;
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

export interface School {
  id: string;
  name: string;
  rating_avg: number;
  reviews_count: ReviewsCount[];
  description: string;
}

export interface CourseDTO {
  name: string;
  availability: boolean;
  duration_months: number;
  course_slug: string;
  direction_slug: string;
  levels: Level;
  prices: Price[];
  course_has_features: CourseHasFeatures[];
  course_has_directions: CourseHasDirection[];
  school: School;
}
