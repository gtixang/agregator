import { inject, Injectable } from '@angular/core';
import { SupabaseService } from '@core/supabase';
import {
  SCHOOL_BASE_FIELDS,
  SCHOOL_SLIDER_FIELDS,
  SCHOOLS_SELECT,
  SCHOOLS_TABLE,
} from '../constants';
import { Observable } from 'rxjs';
import { AsyncData } from '@shared/models';

import { PostgrestSingleResponse } from '@supabase/supabase-js';
import { toAsyncData$ } from '@data-access/utils/async-data.utils';
import {
  SchoolLine,
  SchoolBaseDTO,
  SchoolDTO,
  SchoolPreview,
  SchoolDetailPageHeader,
} from '../types';

@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  private readonly supabase = inject(SupabaseService);

  public mapSchoolDto(dto: SchoolDTO): SchoolLine {
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

  private async fetchSchoolLines(): Promise<SchoolLine[]> {
    const { data, error }: PostgrestSingleResponse<SchoolDTO[]> = await this.supabase
      .getSupabase()
      .from(SCHOOLS_TABLE)
      .select(SCHOOLS_SELECT);

    if (error) {
      throw new Error(`Error fetching schools: ${error.message}`);
    }

    return data.map((school) => this.mapSchoolDto(school));
  }

  private async fetchSchoolsPreview(): Promise<SchoolPreview[]> {
    const { data, error }: PostgrestSingleResponse<SchoolPreview[]> = await this.supabase
      .getSupabase()
      .from(SCHOOLS_TABLE)
      .select(SCHOOL_SLIDER_FIELDS);
    if (error) {
      throw new Error(`Error fetching schools preview: ${error.message}`);
    }
    return data || [];
  }

  private async fetchSchoolById(id: string): Promise<SchoolDetailPageHeader> {
    const { data, error }: PostgrestSingleResponse<SchoolBaseDTO> = await this.supabase
      .getSupabase()
      .from(SCHOOLS_TABLE)
      .select(SCHOOL_BASE_FIELDS)
      .eq('id', id)
      .single();

    if (error) throw new Error(`Error fetching school: ${error.message}`);

    const { id: schoolId, name, description, rating_avg, reviews_count } = data;
    return {
      id: schoolId,
      name,
      description,
      ratingAvg: rating_avg ?? 0,
      reviewsCount: reviews_count?.[0]?.count ?? 0,
    };
  }

  public getSchoolsPreview$(): Observable<AsyncData<SchoolPreview[]>> {
    return toAsyncData$(() => this.fetchSchoolsPreview());
  }

  public getSchoolById$(id: string): Observable<AsyncData<SchoolDetailPageHeader>> {
    return toAsyncData$(() => this.fetchSchoolById(id));
  }
  public getSchoolLines$(): Observable<AsyncData<SchoolLine[]>> {
    return toAsyncData$(() => this.fetchSchoolLines());
  }
}
