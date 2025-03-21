import DropDown from './DropDown';
import SearchDate from './SearchDate';
import SearchInput from './SearchInput';
import Widget from './Widget';

export type dropdownItemsT = { id: number; item: string };

const categories: dropdownItemsT[] = [
  { id: 1, item: 'Искусство' },
  { id: 2, item: 'Музыка' },
];

const cities: dropdownItemsT[] = [
  { id: 1, item: 'Севастополь' },
  { id: 2, item: 'Симферополь' },
];

interface IProps {
  setWidgetToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SearchBar({ setWidgetToggle }: IProps) {
  return (
    <div className="search-bar">
      <div className="search-bar__body">
        <SearchInput />
        <DropDown placeholder="Категория" dropdownItems={categories} />
        <DropDown placeholder="Все города" dropdownItems={cities} />
        <SearchDate />
        <button className="search-bar__button" type="button">
          Найти
        </button>
        <Widget setWidgetToggle={setWidgetToggle} />
      </div>
    </div>
  );
}
