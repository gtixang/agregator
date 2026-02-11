import { inject, Injectable } from '@angular/core';

import { PostgrestResponse, PostgrestSingleResponse } from '@supabase/supabase-js';

import { Observable } from 'rxjs';

import { SupabaseService } from '@core/supabase';

import { AsyncData } from '@shared/models';
import { toAsyncData$ } from '@data-access/utils/async-data.utils';
import { CourseDTO, CourseLine } from '../types';
import { COURSES_TABLE, COURSE_LINE_SELECT } from '../constants';
import { mapCourseDtoToCourseLine } from '../mappers';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private readonly supabase = inject(SupabaseService);

  async fetchDirectionsForHomepage(): Promise<any> {
    const { data, error }: PostgrestSingleResponse<any> = await this.supabase
      .getSupabase()
      .from('categories')
      .select('title');
    if (error) {
      throw new Error(`Error fetching courses: ${error.message}`);
    }
    console.log(data);
    return data;
  }

  public async fetchAllCourseLines(): Promise<CourseLine[]> {
    const { data, error }: PostgrestSingleResponse<CourseDTO[]> = await this.supabase
      .getSupabase()
      .from(COURSES_TABLE)
      .select(COURSE_LINE_SELECT);

    if (error) {
      throw new Error(`Error fetching courses: ${error.message}`);
    }

    return data.map((course) => mapCourseDtoToCourseLine(course));
  }

  public async fetchSchoolCourseLines(schoolId: string): Promise<CourseLine[]> {
    const { data, error } = (await this.supabase
      .getSupabase()
      .from(COURSES_TABLE)
      .select(COURSE_LINE_SELECT)
      .eq('school_id', schoolId)) as PostgrestResponse<CourseDTO>;

    if (error) {
      throw new Error(`Error fetching courses: ${error.message}`);
    }

    return data.map((course) => mapCourseDtoToCourseLine(course));
  }

  public getSchoolCourseLines$(schoolId: string): Observable<AsyncData<CourseLine[]>> {
    return toAsyncData$(() => this.fetchSchoolCourseLines(schoolId));
  }

  public getAllCourseLines$(): Observable<AsyncData<CourseLine[]>> {
    return toAsyncData$(() => this.fetchAllCourseLines());
  }

  public getDirectionsForHomePage$(): any {
    return toAsyncData$(() => this.fetchDirectionsForHomepage());
  }
}
