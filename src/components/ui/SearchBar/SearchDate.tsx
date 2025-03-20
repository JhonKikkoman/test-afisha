import { useEffect, useRef, useState } from 'react';

import 'react-datepicker/dist/react-datepicker.css'; // встроенные стили для datepicker

import DatePicker from 'react-datepicker';

import { formatDate } from '../../../utils/getDate';

export default function SearchDate() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const btnCalendarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isContains = !btnCalendarRef.current?.contains(
        event.target as Node,
      );

      if (btnCalendarRef.current && isContains) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClick = () => setIsOpen(prev => !prev);
  return (
    <div className="date-search" ref={btnCalendarRef}>
      <div className="date-search__button-wrapper" onClick={handleClick}>
        <div className={`date-search__button ${isOpen ? 'button_active' : ''}`}>
          {formatDate(selectedDate)}
        </div>
        <div>
          <span className="date-search__icon">
            <img src="/src/css/icons/calendar-icon.svg" alt="calendar" />
          </span>
        </div>
      </div>
      <DatePicker
        selected={selectedDate}
        onChange={date => {
          setSelectedDate(date);
          setIsOpen(false);
        }}
        open={isOpen}
        customInput={<p className="visually-hidden"></p>}
        dateFormat="dd.MM.yyyy"
        placeholderText="Поиск по дате"
        showPopperArrow={false}
        locale="ru"
      />
    </div>
  );
}
