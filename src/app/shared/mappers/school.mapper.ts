import { SchoolBaseDTO, SchoolDTO, SchoolBase, SchoolLine } from '@entities/school';

export function mapSchoolLineDto(dto: SchoolDTO): SchoolLine {
  return {
    id: dto.id,
    name: dto.name,
    transliteration: dto.transliteration,
    description: dto.description,
    ratingAvg: dto.rating_avg,
    coursesCount: dto.courses_count[0].count,
    reviewsCount: dto.reviews_count[0].count,
    categoriesCount: dto.categories_count[0].count,
    categories: dto.school_has_categories.map((item) => item.categories),
  };
}

export function mapSchoolBaseDto(dto: SchoolBaseDTO): SchoolBase {
  return {
    id: dto.id,
    name: dto.name,
    description: dto.description,
    ratingAvg: dto.rating_avg,
    reviewsCount: dto.reviews_count[0].count,
  };
}
