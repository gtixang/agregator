import { formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale';

export function formatRelativeDate(value: string | Date): string {
  return formatDistanceToNow(new Date(value), {
    addSuffix: true,
    locale: ru,
  });
}
