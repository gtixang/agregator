import { inject, Injectable } from '@angular/core';
import { catchError, from, map, Observable, of, startWith } from 'rxjs';
import { SupabaseService } from '@core/data-access-supabase';
import { AsyncStatus } from '@shared/enums';
import { AsyncState } from '@shared/interfaces/';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private readonly supabaseService = inject(SupabaseService);

  public getSchoolsForSlider() {
    return this.supabaseService.getSupabase().from('schools').select('name, logo_url');
  }

  public getSchoolLogoUrl(url: string): string {
    return this.supabaseService.getSupabase().storage.from('schools').getPublicUrl(url)
      .data.publicUrl;
  }

  public getSchoolLogosState(): Observable<AsyncState<string[]>> {
    return from(this.getSchoolsForSlider()).pipe(
      map(({ data, error }) => {
        if (error) {
          throw error;
        }
        let urls = data?.map(({ logo_url }) => this.getSchoolLogoUrl(logo_url));
        return {
          data: urls,
          status: !!urls?.length ? AsyncStatus.READY : AsyncStatus.EMPTY,
        };
      }),
      catchError((err) => {
        console.error(err);
        return of({ status: AsyncStatus.ERROR });
      }),
      startWith({ status: AsyncStatus.PENDING }),
    );
  }
}
