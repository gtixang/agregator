export enum AsyncStatus {
  EMPTY = 'EMPTY',
  READY = 'READY',
  PENDING = 'PENDING',
  ERROR = 'ERROR',
}

export type AsyncData<T> =
  | { status: AsyncStatus.PENDING }
  | { status: AsyncStatus.ERROR; error?: string }
  | { status: AsyncStatus.EMPTY }
  | { status: AsyncStatus.READY; data: T };
