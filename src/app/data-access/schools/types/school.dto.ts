export interface SchoolBaseDTO {
  id: string;
  name: string;
  description: string;
  rating_avg: number;
  reviews_count: { count: number }[];
}

export type SupabaseCount = {
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
  reviews_count: { count: number }[];
}

export interface SchoolDTO {
  id: string;
  name: string;
  transliteration: string;
  description: string;
  rating_avg: number;
  reviews_count: SupabaseCount[];
  categories_count: SupabaseCount[];
  school_has_categories: SchoolHasCategoryDTO[];
  courses_count: SupabaseCount[];
}
