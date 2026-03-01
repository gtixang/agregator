import { inject, Injectable } from '@angular/core';
import { SupabaseService } from '@core/supabase';

import { Observable } from 'rxjs';
import { AsyncData } from '@shared/models';

import { PostgrestSingleResponse } from '@supabase/supabase-js';
import { toAsyncData$ } from '@shared/lib/rxjs/async-data.utils';

import { mapSchoolLineDto } from '@shared/mappers';

import { SchoolBaseDTO, SchoolDTO } from '../dto/school.dto';
import { SchoolLine } from '../../model/school-line.model';
import { SchoolBase, SchoolPreview } from '../../model/school.view-models';

import {
  SCHOOL_BASE_FIELDS,
  SCHOOL_SLIDER_FIELDS,
  SCHOOLS_SELECT,
  SCHOOLS_TABLE,
} from '../constants/schools.constant';
import { mapSchoolBaseDto } from '@shared/mappers/school.mapper';

@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  private readonly supabase = inject(SupabaseService);

  private async fetchAll(): Promise<SchoolLine[]> {
    const { data, error }: PostgrestSingleResponse<SchoolDTO[]> = await this.supabase
      .getSupabase()
      .from(SCHOOLS_TABLE)
      .select(SCHOOLS_SELECT);

    if (error) {
      throw new Error(`Error fetching schools: ${error.message}`);
    }

    return data.map((school) => mapSchoolLineDto(school));
  }

  private async fetchById(id: string): Promise<SchoolBase> {
    const { data, error }: PostgrestSingleResponse<SchoolBaseDTO> = await this.supabase
      .getSupabase()
      .from(SCHOOLS_TABLE)
      .select(SCHOOL_BASE_FIELDS)
      .eq('id', id)
      .single();

    if (error) throw new Error(`Error fetching school: ${error.message}`);

    return mapSchoolBaseDto(data);
  }

  private async fetchPreviews(): Promise<SchoolPreview[]> {
    const { data, error }: PostgrestSingleResponse<SchoolPreview[]> = await this.supabase
      .getSupabase()
      .from(SCHOOLS_TABLE)
      .select(SCHOOL_SLIDER_FIELDS);
    if (error) {
      throw new Error(`Error fetching schools preview: ${error.message}`);
    }
    return data || [];
  }

  public getPreviews$(): Observable<AsyncData<SchoolPreview[]>> {
    return toAsyncData$(() => this.fetchPreviews());
  }

  public getAll$(): Observable<AsyncData<SchoolLine[]>> {
    return toAsyncData$(() => this.fetchAll());
  }

  public getById$(id: string): Observable<AsyncData<SchoolBase>> {
    return toAsyncData$(() => this.fetchById(id));
  }
}
