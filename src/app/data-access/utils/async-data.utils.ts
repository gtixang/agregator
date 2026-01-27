import { AsyncData, AsyncStatus } from '@shared/models';
import {
  catchError,
  defer,
  from,
  map,
  Observable,
  of,
  shareReplay,
  startWith,
} from 'rxjs';

export const toAsyncData$ = <T>(fetchFn: () => Promise<T>): Observable<AsyncData<T>> =>
  defer(() =>
    from(fetchFn()).pipe(
      map((data: T) => ({ data, status: AsyncStatus.READY })),
      catchError(() => of({ status: AsyncStatus.ERROR } as const)),
      startWith({ status: AsyncStatus.PENDING } as const),
      shareReplay(1),
    ),
  );
