import { CategoryDTO, SchoolDTO } from './school.dto';

export interface SchoolPreview {
  id: number;
  name: string;
  full_logo_url: string;
}

export type School = Omit<
  SchoolDTO,
  | 'rating_avg'
  | 'reviews_count'
  | 'categories_count'
  | 'school_has_categories'
  | 'courses_count'
> & {
  ratingAvg: number;
  reviewsCount: number;
  categoriesCount: number;
  categories: CategoryDTO[];
  coursesCount: number;
};
