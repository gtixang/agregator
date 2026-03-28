import { ReviewDTO } from '../api/dto';
import { Review } from '../model';

export function mapReviewDTOToReview(reviewDTO: ReviewDTO): Review {
  return {
    id: reviewDTO.id,
    createdAt: reviewDTO.created_at,
    authorName: reviewDTO.author_name,
    rating: reviewDTO.rating,
    reviewTitle: reviewDTO.review_title,
    reviewText: reviewDTO.review_text,
  };
}
