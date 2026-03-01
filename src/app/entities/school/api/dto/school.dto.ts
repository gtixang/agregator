export type AggregateCountDTO = {
  count: number;
};

export interface CategoryDTO {
  slug: string;
  title: string;
}

export interface SchoolHasCategoryDTO {
  categories: CategoryDTO;
}

export interface SchoolSummaryDTO {
  id: string;
  name: string;
  rating_avg: number;
  reviews_count: AggregateCountDTO[];
}

export interface SchoolBaseDTO {
  id: string;
  name: string;
  description: string;
  rating_avg: number;
  reviews_count: AggregateCountDTO[];
}

export interface SchoolDTO {
  id: string;
  name: string;
  transliteration: string;
  description: string;
  rating_avg: number;
  reviews_count: AggregateCountDTO[];
  categories_count: AggregateCountDTO[];
  school_has_categories: SchoolHasCategoryDTO[];
  courses_count: AggregateCountDTO[];
}
