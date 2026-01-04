import { Advantages } from '../interfaces/advantages.interface';
import { Price } from '../interfaces/price.interface';
import { School } from '../interfaces/school.intrerface';

export interface Course {
  name: string;
  school: School;
  price: Price;
  advantages: Advantages[];
}
