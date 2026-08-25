import { inject, Injectable } from '@angular/core';
import { SupabaseService } from '@shared/api';
import { AsyncData } from '@shared/models';
import { Observable } from 'rxjs';
import { Category } from '../model/category.model';
import { toAsyncData$ } from '@shared/lib';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private readonly supabase = inject(SupabaseService);

  private async fetchAll(): Promise<Category[]> {
    const { data, error } = await this.supabase
      .getSupabase()
      .from('categories')
      .select('*');

    if (error) {
      throw new Error(`Error fetching categories: ${error.message}`);
    }

    return data;
  }

  public getAll$(): Observable<AsyncData<Category[]>> {
    return toAsyncData$(() => this.fetchAll());
  }
}
