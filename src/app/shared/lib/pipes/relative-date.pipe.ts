import { Pipe, PipeTransform } from '@angular/core';
import { formatRelativeDate } from '../date';

@Pipe({ name: 'relativeDate', standalone: true })
export class RelativeDatePipe implements PipeTransform {
  transform(value: string | Date): string {
    return formatRelativeDate(value);
  }
}
