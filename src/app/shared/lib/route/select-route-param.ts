import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { distinctUntilChanged, filter, map } from 'rxjs';

export function selectRouteParam(paramName: string) {
  const route = inject(ActivatedRoute);
  return route.paramMap.pipe(
    map((params) => params.get(paramName)),
    filter((value): value is string => value !== null),
    distinctUntilChanged(),
  );
}
