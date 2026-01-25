import { inject, Injectable } from '@angular/core';

import { PostgrestSingleResponse } from '@supabase/supabase-js';

import {
  catchError,
  defer,
  from,
  map,
  Observable,
  of,
  shareReplay,
  startWith,
} from 'rxjs';

import { SupabaseService } from '@data-access/supabase';
import { AsyncStatus } from '@shared/enums';

import { Course, CourseDTO } from '../types';

import { COURSES_TABLE, COURSES_SELECT } from '../constants';
import { AsyncData } from '@shared/models';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private readonly supabaseService = inject(SupabaseService);

  public async fetchCourses(): Promise<CourseDTO[]> {
    const { data, error }: PostgrestSingleResponse<CourseDTO[]> =
      await this.supabaseService.getSupabase().from(COURSES_TABLE).select(COURSES_SELECT);

    if (error) {
      throw new Error(`Error fetching courses: ${error.message}`);
    }

    return data || [];
  }

  public toClientModel(course: CourseDTO): Course {
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

  public getCourses$(): Observable<AsyncData<Course[]>> {
    return defer(() => {
      return from(this.fetchCourses()).pipe(
        map((data: CourseDTO[]) => {
          return {
            data: data.map(this.toClientModel),
            status: data?.length ? AsyncStatus.READY : AsyncStatus.EMPTY,
          };
        }),
        catchError((err) => {
          console.error(err);
          return of({ status: AsyncStatus.ERROR });
        }),
        startWith({ status: AsyncStatus.PENDING }),
        shareReplay({ bufferSize: 1, refCount: true }),
      );
    });
  }
}
