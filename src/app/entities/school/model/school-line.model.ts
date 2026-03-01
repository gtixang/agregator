import { SchoolDTO } from '../api/dto/school.dto';
import { Categories } from './school.view-models';

export type SchoolLine = Omit<
  SchoolDTO,
  | 'rating_avg'
  | 'reviews_count'
  | 'categories_count'
  | 'school_has_categories'
  | 'courses_count'
> & {
  ratingAvg: number;
  reviewsCount: number;
  transliteration: string;
  categoriesCount: number;
  categories: Categories[];
  coursesCount: number;
};
