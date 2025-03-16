import { useState } from 'react';

import 'react-datepicker/dist/react-datepicker.css'; // встроенные стили для datepicker

import DatePicker from 'react-datepicker';

export default function SearchDate() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const formatDate = (date: Date | null) => {
    if (!date) {
      return 'Выберите дату';
    }
    return date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  return (
    <div className="date-search">
      <DatePicker
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        customInput={
          <div className="date-search__input">{formatDate(selectedDate)}</div>
        }
        dateFormat="dd.MM.yyyy"
        placeholderText="Поиск по дате"
        showPopperArrow={false}
        locale="ru"
      />
    </div>
  );
}
