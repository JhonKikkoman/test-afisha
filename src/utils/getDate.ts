import { ru } from 'date-fns/locale/ru';
import { registerLocale } from 'react-datepicker';

registerLocale('ru', ru);

export const formatDate = (date: Date | null) => {
  if (!date) {
    return 'Поиск по дате';
  }
  return date.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};
