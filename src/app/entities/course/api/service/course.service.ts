import { inject, Injectable } from '@angular/core';
import { SupabaseService } from '@shared/api';
import { PostgrestResponse, PostgrestSingleResponse } from '@supabase/supabase-js';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';

import { AsyncData } from '@shared/models';
import { toAsyncData$ } from '@shared/lib/rxjs';
import { CourseLine, CourseFilters } from '../../model';
import { CourseDTO } from '../dto';
import { COURSES_SELECT, COURSES_TABLE } from '../constants';
import { mapCourseLineDto } from '../../mappers';
import { INITIAL_COURSES_FILTER } from '@shared/constants/course-filter.constants';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private readonly supabase = inject(SupabaseService);
  private filtersState$ = new BehaviorSubject<CourseFilters>(INITIAL_COURSES_FILTER);

  public updateFilters(newFilters: CourseFilters): void {
    this.filtersState$.next(newFilters);
  }

  private async fetchFiltered(filters: any, schoolId?: string): Promise<CourseLine[]> {
    let finalSelect = COURSES_SELECT;

    if (finalSelect.includes('prices(')) {
      finalSelect = finalSelect.replace('prices(', 'prices!inner(');
    }

    if (finalSelect.includes('certification_type(')) {
      finalSelect = finalSelect.replace(
        'certification_type(',
        'certification_type!inner(',
      );
    }

    // ==========================================
    // 2. ИНИЦИАЛИЗИРУЕМ ЗАПРОС К SUPABASE
    // ==========================================
    // Создаем базовый запрос к таблице курсов с нашей настроенной структурой полей
    let query = this.supabase.getSupabase().from(COURSES_TABLE).select(finalSelect);

    if (schoolId) {
      query = query.eq('school_id', schoolId);
    }

    // Цена
    if (filters.price) {
      query = query
        .gte('prices.current', filters.price.from)
        .lte('prices.current', filters.price.to);
    }

    // Дополнительные фильтры
    if (filters.additional) {
      if (filters.additional.internship === true) {
        query = query.eq('has_internship', true);
      }

      if (filters.additional.certificate === true) {
        query = query.eq('certification_type.code', 'certificate');
      }
    }

    // Длительность
    if (filters.durationMonths) {
      query = query
        .gte('duration_months', filters.durationMonths.from)
        .lte('duration_months', filters.durationMonths.to);
    }

    // Уровни
    if (filters.level) {
      const selectedCodes = Object.keys(filters.level).filter(
        (key) => filters.level[key] === true,
      );
      if (selectedCodes.length > 0) {
        query = query.in('levels.code', selectedCodes);
        query = query.not('levels', 'is', null);
      }
    }

    // Фильтр школ
    if (filters.schools) {
      const selectedSchoolIds = Object.keys(filters.schools).filter(
        (key) => filters.schools[key] === true,
      );
      if (selectedSchoolIds.length > 0) {
        query = query.in('school_id', selectedSchoolIds);
      }
    }

    const { data, error } = (await query) as PostgrestResponse<CourseDTO>;

    if (error) {
      throw new Error(`Error filtering courses: ${error.message}`);
    }

    return data.map((course) => mapCourseLineDto(course));
  }

  public getFilteredCourses$(): Observable<AsyncData<CourseLine[]>> {
    return this.filtersState$.pipe(
      switchMap((filters) => toAsyncData$(() => this.fetchFiltered(filters))),
    );
  }

  public getFilteredBySchool$(schoolId: string): Observable<AsyncData<CourseLine[]>> {
    return this.filtersState$.pipe(
      switchMap((filters) => toAsyncData$(() => this.fetchFiltered(filters, schoolId))),
    );
  }
}
