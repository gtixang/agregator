import { inject, Injectable } from '@angular/core';
import { SupabaseService } from '@shared/api';
import { toAsyncData$ } from '@shared/lib/rxjs';
import { AsyncData } from '@shared/models';
import { Observable, startWith, Subject, switchMap } from 'rxjs';
import { REVIEWS_SELECT, REVIEWS_TABLE } from '../constants';
import { ReviewDTO } from '../dto';
import { CreateReviewRequest, Review } from '../../model';
import { mapReviewDTOToReview } from '../../mappers';
import { PostgrestResponse, PostgrestSingleResponse } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private readonly supabase = inject(SupabaseService);

  private reviewsRefresh$ = new Subject<void>();

  public refreshReviews() {
    this.reviewsRefresh$.next();
  }

  private async fetchSchoolRatingStats(schoolId: string) {
    const { data: stats, error } = await this.supabase
      .getSupabase()
      .rpc('get_rating_stats', { p_school_id: schoolId });

    if (error) {
      console.error('Error fetching rating stats', error);
      return [];
    }
    console.log(stats);
    return stats;
  }

  private async fetchCreate(data: CreateReviewRequest): Promise<Review> {
    const toReviewDTO = (form: CreateReviewRequest) => ({
      school_id: form.schoolId,
      rating: form.rating,
      review_text: form.text,
      review_title: form.title,
      author_name: form.authorName,
    });

    const { data: newReview, error } = (await this.supabase
      .getSupabase()
      .from('reviews')
      .insert([toReviewDTO(data)])
      .select()) as PostgrestSingleResponse<Review>;

    if (error) throw new Error(`Create review failed: ${error.message}`);

    return newReview;
  }

  private async fetchBySchoolId(schoolId: string): Promise<Review[]> {
    const { data, error } = (await this.supabase
      .getSupabase()
      .from(REVIEWS_TABLE)
      .select(REVIEWS_SELECT)
      .eq('school_id', schoolId)) as PostgrestResponse<ReviewDTO>;

    if (error) {
      throw new Error(`Error fetching reviews: ${error.message}`);
    }

    return data.map((review: ReviewDTO) => mapReviewDTOToReview(review));
  }

  public getBySchoolId$(schoolId: string): Observable<AsyncData<any[]>> {
    return toAsyncData$(() => this.fetchBySchoolId(schoolId));
  }

  public getBySchoolIdWithRefresh$(schoolId: string): Observable<AsyncData<any[]>> {
    return this.reviewsRefresh$.pipe(
      startWith(null),
      switchMap(() => this.getBySchoolId$(schoolId)),
    );
  }
  public createReview$(data: CreateReviewRequest): Observable<AsyncData<any>> {
    return toAsyncData$(() => this.fetchCreate(data));
  }
  public getSchoolRatingStats$(id: string): Observable<AsyncData<any>> {
    return toAsyncData$(() => this.fetchSchoolRatingStats(id));
  }
}
