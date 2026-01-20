import { AsyncStatus } from '@shared/enums';

export interface AsyncState<T> {
  data?: T;
  status: AsyncStatus;
}
