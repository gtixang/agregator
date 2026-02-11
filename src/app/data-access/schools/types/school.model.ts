import { CategoryDTO, SchoolBaseDTO, SchoolDTO } from './school.dto';

export interface SchoolPreview {
  id: number;
  name: string;
  full_logo_url: string;
}

export interface SchoolOverviewVM {
  name: string;
  transliteration: string;
  coursesCount: number;
  categoriesCount: number;
  categories: Categories[];
}

export interface Categories {
  slug: string;
  title: string;
}

export interface SchoolSummary {
  id: string;
  name: string;
  ratingAvg: number;
  reviewsCount: number;
}

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
  categoriesCount: number;
  categories: Categories[];
  coursesCount: number;
};
export type SchoolDetailPageHeader = Omit<
  SchoolBaseDTO,
  'rating_avg' | 'reviews_count'
> & {
  ratingAvg: number;
  reviewsCount: number;
};
