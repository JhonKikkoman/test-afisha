import { useState } from 'react';

import 'react-datepicker/dist/react-datepicker.css'; // встроенные стили для datepicker

import DatePicker from 'react-datepicker';

export default function SearchDate() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const formatDate = (date: Date | null) => {
    if (!date) {
      return 'Поиск по дате';
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
          <button className="date-search__button">
            {formatDate(selectedDate)}
          </button>
        }
        dateFormat="dd.MM.yyyy"
        placeholderText="Поиск по дате"
        showPopperArrow={false}
        locale="ru"
      />
    </div>
  );
}
