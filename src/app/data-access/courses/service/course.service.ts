import { inject, Injectable } from '@angular/core';

import { PostgrestResponse, PostgrestSingleResponse } from '@supabase/supabase-js';

import { Observable } from 'rxjs';

import { SupabaseService } from '@data-access/supabase';

import { AsyncData } from '@shared/models';
import { toAsyncData$ } from '@data-access/utils/async-data.utils';
import { Course, CourseDTO } from '../types';
import { COURSES_TABLE, COURSES_SELECT } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private readonly supabase = inject(SupabaseService);

  public mapCourseDto(course: CourseDTO): Course {
    return {
      name: course.name,
      availability: course.availability,
      duration: course.duration_months,
      course_slug: course.course_slug,
      direction_slug: course.direction_slug,
      levels: course.levels,
      prices: course.prices,
      features: course.course_has_features.map((c) => c.features),
      directions: course.course_has_directions.map((c) => c.directions),
      school: course.school,
    };
  }

  public async fetchCourses(): Promise<Course[]> {
    const { data, error }: PostgrestSingleResponse<CourseDTO[]> = await this.supabase
      .getSupabase()
      .from(COURSES_TABLE)
      .select(COURSES_SELECT);

    if (error) {
      throw new Error(`Error fetching courses: ${error.message}`);
    }

    return data.map((course) => this.mapCourseDto(course));
  }

  public async fetchSchoolCourses(schoolId: string): Promise<Course[]> {
    const { data, error } = (await this.supabase
      .getSupabase()
      .from(COURSES_TABLE)
      .select(COURSES_SELECT)
      .eq('school_id', schoolId)) as PostgrestResponse<CourseDTO>;

    if (error) {
      throw new Error(`Error fetching courses: ${error.message}`);
    }

    return data.map((course) => this.mapCourseDto(course));
  }

  public getSchoolCourses$(schoolId: string): Observable<AsyncData<Course[]>> {
    return toAsyncData$(() => this.fetchSchoolCourses(schoolId));
  }

  public getCoursesList$(): Observable<AsyncData<Course[]>> {
    return toAsyncData$(() => this.fetchCourses());
  }
}
