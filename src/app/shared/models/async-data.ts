import { AsyncStatus } from '@shared/enums';

export interface AsyncData<T> {
  data?: T;
  status: AsyncStatus;
}
