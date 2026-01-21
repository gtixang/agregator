import { inject, Injectable } from '@angular/core';
import { catchError, from, map, Observable, of, startWith, tap } from 'rxjs';
import { SupabaseService } from '@core/data-access-supabase';
import { AsyncStatus } from '@shared/enums';
import { AsyncState } from '@shared/interfaces/';

export interface School {
  id: number;
  name: string;
  logo_url: string;
}

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private readonly supabaseService = inject(SupabaseService);

  public getSchoolsForSlider() {
    return this.supabaseService
      .getSupabase()
      .from('schools')
      .select('id, name, logo_url');
  }

  public getSchoolLogoUrl(url: string): string {
    return this.supabaseService.getSupabase().storage.from('schools').getPublicUrl(url)
      .data.publicUrl;
  }

  public getSchoolLogosState(): Observable<AsyncState<School[]>> {
    return from(this.getSchoolsForSlider()).pipe(
      map(({ data, error }) => {
        if (error) {
          throw error;
        }

        let mappedSchools = data?.map((school) => {
          return {
            id: school.id,
            name: school.name,
            logo_url: this.getSchoolLogoUrl(school.logo_url),
          };
        });

        return {
          data: mappedSchools,
          status: !!mappedSchools?.length ? AsyncStatus.READY : AsyncStatus.EMPTY,
        };
      }),
      catchError((err) => {
        console.error(err);
        return of({ status: AsyncStatus.ERROR });
      }) as any,
      startWith({ status: AsyncStatus.PENDING }),
    );
  }
}
