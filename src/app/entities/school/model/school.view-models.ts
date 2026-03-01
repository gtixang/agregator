export interface Categories {
  slug: string;
  title: string;
}

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
export interface SchoolSummary {
  id: string;
  name: string;
  ratingAvg: number;
  reviewsCount: number;
}

export interface SchoolBase {
  id: string;
  name: string;
  description: string;
  ratingAvg: number;
  reviewsCount: number;
}
