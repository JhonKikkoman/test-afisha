import { useState } from 'react';

import 'react-datepicker/dist/react-datepicker.css'; // встроенные стили для datepicker

import DatePicker from 'react-datepicker';

import { formatDate } from '../../../utils/getDate';

export default function SearchDate() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);

  console.log(openCalendar);

  return (
    <div className="date-search">
      <DatePicker
        open={openCalendar}
        selected={selectedDate}
        onChange={date => {
          setSelectedDate(date);
          setIsOpen(false);
          setOpenCalendar(false);
        }}
        onClickOutside={() => {
          setIsOpen(false);
          setOpenCalendar(false);
        }}
        onInputClick={() => {
          console.log(openCalendar);
          setIsOpen(prev => !prev);
          setOpenCalendar(prev => !prev);
        }}
        customInput={
          <div className="date-search__button-wrapper">
            <div
              className={`date-search__button ${isOpen ? 'button_active' : ''}`}
            >
              {formatDate(selectedDate)}
            </div>
            <span className="date-search__icon">
              <img src="/src/css/icons/calendar-icon.svg" alt="calendar" />
            </span>
          </div>
        }
        dateFormat="dd.MM.yyyy"
        placeholderText="Поиск по дате"
        showPopperArrow={false}
        locale="ru"
      />
    </div>
  );
}
