import DropDown from './DropDown';
import SearchDate from './SearchDate';

export type dropdownItemsT = { id: number; item: string };

const categories: dropdownItemsT[] = [
  { id: 1, item: 'Искусство' },
  { id: 2, item: 'Музыка' },
];

const cities: dropdownItemsT[] = [
  { id: 1, item: 'Севастополь' },
  { id: 2, item: 'Симферополь' },
];

export default function SearchBar() {
  return (
    <div className="search-bar">
      <div className="search-bar__body">
        <div className="search">
          <input
            className="search__input"
            type="text"
            placeholder="Введите название события"
          />
        </div>
        <DropDown placeholder="Категория" dropdownItems={categories} />
        <DropDown placeholder="Все города" dropdownItems={cities} />
        <SearchDate />
      </div>
    </div>
  );
}
