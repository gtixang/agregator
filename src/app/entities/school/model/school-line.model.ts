import { SchoolDTO } from '../data-access';
import { Categories } from './categories.model';

export type SchoolLine = Omit<
  SchoolDTO,
  | 'rating_avg'
  | 'reviews_count'
  | 'categories_count'
  | 'school_has_categories'
  | 'courses_count'
> & {
  ratingAvg: any;
  reviewsCount: number;
  transliteration: string;
  categoriesCount: number;
  categories: Categories[];
  coursesCount: number;
};
