import { inject, Injectable } from '@angular/core';
import { SupabaseService } from '@core/supabase';
import { PostgrestResponse, PostgrestSingleResponse } from '@supabase/supabase-js';
import { Observable } from 'rxjs';

import { CourseDTO } from '../dto/course.dto';
import { CourseLine } from '../../model/course-line.model';
import { mapCourseLineDto } from '@shared/mappers/course.mapper';
import { AsyncData } from '@shared/models';
import { toAsyncData$ } from '@shared/lib/rxjs/async-data.utils';

import { COURSES_SELECT, COURSES_TABLE } from '../constants/courses.constants';

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

  public async fetchAll(): Promise<CourseLine[]> {
    const { data, error }: PostgrestSingleResponse<CourseDTO[]> = await this.supabase
      .getSupabase()
      .from(COURSES_TABLE)
      .select(COURSES_SELECT);

    if (error) {
      throw new Error(`Error fetching courses: ${error.message}`);
    }

    return data.map((course) => mapCourseLineDto(course));
  }

  private async fetchSchoolId(schoolId: string): Promise<CourseLine[]> {
    const { data, error } = (await this.supabase
      .getSupabase()
      .from(COURSES_TABLE)
      .select(COURSES_SELECT)
      .eq('school_id', schoolId)) as PostgrestResponse<CourseDTO>;

    if (error) {
      throw new Error(`Error fetching courses: ${error.message}`);
    }
    console.log('data', data);

    return data.map((courses) => mapCourseLineDto(courses));
  }

  public getAll$(): Observable<AsyncData<CourseLine[]>> {
    return toAsyncData$(() => this.fetchAll());
  }

  public getBySchoolId$(schoolId: string): Observable<AsyncData<CourseLine[]>> {
    return toAsyncData$(() => this.fetchSchoolId(schoolId));
  }
}
