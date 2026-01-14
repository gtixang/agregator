import { Advantages } from './advantages.interface';
import { Price } from './price.interface';
import { School } from './school.intrerface';

export interface Course {
  name: string;
  school: School;
  price: Price;
  advantages: Advantages[];
}
