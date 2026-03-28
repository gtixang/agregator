import { Categories } from './categories.model';

export interface SchoolOverview {
  name: string;
  transliteration: string;
  coursesCount: number;
  categoriesCount: number;
  categories: Categories[];
}
