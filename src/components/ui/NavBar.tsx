import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type titleT = { id: number; title: string; route: string };

const titleArray: titleT[] = [
  { id: 1, title: 'Продажа билетов', route: '/' },
  { id: 2, title: 'Управление событиями', route: '/events' },
];

interface IProps {
  resetSelect: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function NavBar({ resetSelect }: IProps) {
  const [active, setActive] = useState<number>(titleArray[0].id);
  const navigate = useNavigate();

  const handleClick = (id: number, route: string) => {
    resetSelect(null);
    navigate(route);
    setActive(id);
  };

  return (
    <nav className="header__menu">
      <ul className="header__menu-list">
        {titleArray.map(({ title, route, id }) => (
          <li
            key={id}
            className={`header__menu-item ${active === id ? 'item-active' : ''}`}
            onClick={() => handleClick(id, route)}
          >
            <p>{title}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
}
