import { State } from '@shared/enums';

export interface AsyncState<T> {
  data?: T;
  state: State;
}
