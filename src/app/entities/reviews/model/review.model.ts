import { ReviewDTO } from '../data-access/dto';

export type Review = Omit<
  ReviewDTO,
  'created_at' | 'review_text' | 'review_title' | 'author_name'
> & {
  createdAt: string;
  reviewTitle: string;
  reviewText: string;
  authorName: string;
};
