import { AggregateCountDTO } from './school.dto';

export interface SchoolBaseDTO {
  id: string;
  name: string;
  description: string;
  rating_avg: any;
  reviews_count: any;
}
