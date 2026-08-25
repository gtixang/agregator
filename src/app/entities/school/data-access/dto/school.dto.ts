import { CategoryDTO } from './category.dto';

export type AggregateCountDTO = {
  count: number;
};

export interface SchoolDTO {
  id: string;
  name: string;
  transliteration: string;
  description: string;
  rating_avg: any;
  reviews_count: any;
  categories_count: any;
  school_has_categories: CategoryDTO[];
  courses_count: any;
}
