import { inject, Injectable } from '@angular/core';
import { SupabaseService } from '@data-access/supabase';
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
import { School, SchoolBaseDTO, SchoolDTO, SchoolPreview } from '../types';

@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  private readonly supabase = inject(SupabaseService);

  public mapSchoolDto(dto: SchoolDTO): School {
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

  private async fetchSchoolsList(): Promise<School[]> {
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

  private async fetchSchoolById(id: string): Promise<SchoolBaseDTO> {
    const { data, error }: PostgrestSingleResponse<SchoolBaseDTO> = await this.supabase
      .getSupabase()
      .from(SCHOOLS_TABLE)
      .select(SCHOOL_BASE_FIELDS)
      .eq('id', id)
      .single();

    if (error) throw new Error(`Error fetching school: ${error.message}`);
    return data;
  }

  public getSchoolsPreview$(): Observable<AsyncData<SchoolPreview[]>> {
    return toAsyncData$(() => this.fetchSchoolsPreview());
  }

  public getSchoolById$(id: string): Observable<AsyncData<SchoolBaseDTO>> {
    return toAsyncData$(() => this.fetchSchoolById(id));
  }
  public getSchoolsList$(): Observable<AsyncData<School[]>> {
    return toAsyncData$(() => this.fetchSchoolsList());
  }
}
