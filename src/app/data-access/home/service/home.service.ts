import { inject, Injectable } from '@angular/core';
import { catchError, defer, from, map, Observable, of, startWith } from 'rxjs';

import { AsyncStatus } from '@shared/enums';
import { AsyncData } from '@shared/models';
import { SupabaseService } from '@data-access/supabase';
import { SCHOOL_TABLE, SCHOOL_SLIDER_FIELDS } from '@data-access/schools/constants';
import { PostgrestSingleResponse } from '@supabase/supabase-js';
import { SchoolPreview } from '../types';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private readonly supabaseService = inject(SupabaseService);

  private async fetchSchools(): Promise<SchoolPreview[]> {
    const { data, error }: PostgrestSingleResponse<SchoolPreview[]> =
      await this.supabaseService
        .getSupabase()
        .from(SCHOOL_TABLE)
        .select(SCHOOL_SLIDER_FIELDS);

    if (error) {
      throw new Error(`Error fetching courses: ${error.message}`);
    }

    return data || [];
  }

  public getSchoolsPreview$(): Observable<AsyncData<SchoolPreview[]>> {
    return defer(() =>
      from(this.fetchSchools()).pipe(
        map((data: SchoolPreview[]) => {
          return {
            data: data,
            status: data?.length ? AsyncStatus.READY : AsyncStatus.EMPTY,
          };
        }),
        catchError((err) => {
          console.error(err);
          return of({ status: AsyncStatus.ERROR });
        }),
        startWith({ status: AsyncStatus.PENDING }),
      ),
    );
  }
}
