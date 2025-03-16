import { useEffect, useState } from 'react';

import { dropdownItemsT } from './SearchBar';

interface IProps {
  placeholder: string;
  dropdownItems: dropdownItemsT[];
}

export default function DropDown({ dropdownItems, placeholder }: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectItem, setSelectItem] = useState('');

  useEffect(() => {
    setSelectItem(placeholder);
  }, [placeholder]);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCategorySelect = (dropDownItem: string) => {
    setSelectItem(dropDownItem);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown__toggle" onClick={handleToggleDropdown}>
        {selectItem}
        <span className={`dropdown__arrow ${isOpen ? 'open' : ''}`} />
      </button>
      {isOpen && (
        <ul className="dropdown__menu">
          {dropdownItems.map(({ id, item }) => (
            <li
              key={id}
              className="dropdown__item"
              onClick={() => handleCategorySelect(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
