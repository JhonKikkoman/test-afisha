import { useEffect, useRef, useState } from 'react';

import { dropdownItemsT } from './SearchBar';

interface IProps {
  placeholder: string;
  dropdownItems: dropdownItemsT[];
}

export default function DropDown({ dropdownItems, placeholder }: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectItem, setSelectItem] = useState('');
  const dropDownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setSelectItem(placeholder);
  }, [placeholder]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isContains = !dropDownRef.current?.contains(event.target as Node);

      if (dropDownRef.current && isContains) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  const handleCategorySelect = (dropDownItem: string) => {
    setSelectItem(dropDownItem);
    setIsOpen(false);
  };

  return (
    <div className="dropdown" ref={dropDownRef}>
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
