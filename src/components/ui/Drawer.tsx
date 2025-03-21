import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { arrUrl } from '../../_constants';

interface IProps {
  selected: number | null;
  newSelect: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Drawer({ selected, newSelect }: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  const sideBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isContains = !sideBarRef.current?.contains(event.target as Node);

      if (sideBarRef.current && isContains) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navigate = useNavigate();

  const handleToggle = () => setIsOpen(prev => !prev);

  const handleClick = () => navigate('/weather');

  const handleClickItems = (path: string, id: number) => {
    newSelect(id);
    navigate(path);
  };

  return (
    <aside className="side-bar" ref={sideBarRef}>
      <div
        className={`side-bar__wrapper ${isOpen ? 'drawer__open' : 'drawer__close'}`}
      >
        <div
          className={`header__wrapper ${isOpen ? 'header__open' : 'header__close'}`}
        >
          <div className="side-bar__header">
            <span
              className="drawer__icon-wrapper drawer__icon"
              onClick={handleToggle}
            >
              <img
                src="/src/css/icons/menu-icon.png"
                alt="menu"
                loading="lazy"
              />
            </span>
          </div>
        </div>

        <span
          className={`divider ${isOpen ? 'divider__open' : 'divider__close'}`}
        ></span>

        <div className="side-bar__body">
          <ul className="side-bar__list">
            {arrUrl.map(({ id, downloadUrl, path }) => (
              <li className="side-bar__item" key={id}>
                <div
                  className={`drawer__icon-wrapper ${selected === id ? 'side-bar__item-selected' : ''}`}
                >
                  <span
                    className="drawer__icon"
                    onClick={() => handleClickItems(path, id)}
                  >
                    <img src={downloadUrl} alt="icon" loading="lazy" />
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <span
          className={`divider ${isOpen ? 'divider__open' : 'divider__close'}`}
        ></span>

        <div className="weather">
          <div className="drawer__icon-wrapper" onClick={handleClick}>
            <span className="drawer__icon">
              <img
                src="/src/css/icons/weather.png"
                alt="wather"
                loading="lazy"
              />
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
