import { inject, Injectable } from '@angular/core';
import { SupabaseService } from '@shared/api';
import { PostgrestResponse, PostgrestSingleResponse } from '@supabase/supabase-js';
import { Observable } from 'rxjs';

import { AsyncData } from '@shared/models';
import { toAsyncData$ } from '@shared/lib/rxjs';
import { CourseLine } from '../../model';
import { CourseDTO } from '../dto';
import { COURSES_SELECT, COURSES_TABLE } from '../constants';
import { mapCourseLineDto } from '../../mappers';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private readonly supabase = inject(SupabaseService);

  //   async fetchDirectionsForHomepage(): Promise<any> {
  //   const { data, error }: PostgrestSingleResponse<any> = await this.supabase
  //     .getSupabase()
  //     .from('categories')
  //     .select('title');
  //   if (error) {
  //     throw new Error(`Error fetching courses: ${error.message}`);
  //   }

  //   return data;
  // }

  // public getDirectionsForHomePage$(): any {
  //   return toAsyncData$(() => this.fetchDirectionsForHomepage());
  // }

  private async fetchAll(): Promise<CourseLine[]> {
    const { data, error }: PostgrestSingleResponse<CourseDTO[]> = await this.supabase
      .getSupabase()
      .from(COURSES_TABLE)
      .select(COURSES_SELECT);

    if (error) {
      throw new Error(`Error fetching courses: ${error.message}`);
    }

    return data.map((course) => mapCourseLineDto(course));
  }

  private async fetchBySchoolId(schoolId: string): Promise<CourseLine[]> {
    const { data, error } = (await this.supabase
      .getSupabase()
      .from(COURSES_TABLE)
      .select(COURSES_SELECT)
      .eq('school_id', schoolId)) as PostgrestResponse<CourseDTO>;

    if (error) {
      throw new Error(`Error fetching courses: ${error.message}`);
    }

    return data.map((courses) => mapCourseLineDto(courses));
  }

  public getAll$(): Observable<AsyncData<CourseLine[]>> {
    return toAsyncData$(() => this.fetchAll());
  }

  public getBySchoolId$(schoolId: string): Observable<AsyncData<CourseLine[]>> {
    return toAsyncData$(() => this.fetchBySchoolId(schoolId));
  }
}
