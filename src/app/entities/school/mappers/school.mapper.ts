import { SchoolBaseDTO, SchoolDTO } from '../data-access';
import { SchoolBase, SchoolLine } from '../model';

export function mapSchoolLineDto(school: SchoolDTO): SchoolLine {
  return {
    id: school.id,
    name: school.name,
    transliteration: school.transliteration,
    ratingAvg: school.rating_avg?.[0]?.rating_avg ?? 0,
    reviewsCount: school.reviews_count?.[0]?.reviews_count ?? 0,
    categoriesCount: school.categories_count?.[0]?.count ?? 0,
    coursesCount: school.courses_count?.[0]?.count ?? 0,
    categories: school.school_has_categories?.map((c) => c.categories) ?? [],
    description: school.description,
  };
}

export function mapSchoolBaseDto(dto: SchoolBaseDTO): SchoolBase {
  return {
    id: dto.id,
    name: dto.name,
    description: dto.description,
    ratingAvg: dto.rating_avg?.[0]?.rating_avg ?? 0,
    reviewsCount: dto.reviews_count?.[0]?.reviews_count ?? 0,
  };
}
