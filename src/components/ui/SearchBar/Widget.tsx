interface IProps {
  setWidgetToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

// "размапить" иконки через ul>li и настроить их функционал
// доп. класс plate  table  list, если будет три кнопки для переключения widget
export default function Widget({ setWidgetToggle }: IProps) {
  const handleClick = () => setWidgetToggle(prev => !prev);
  return (
    <div className="widget">
      <ul className="widget__list">
        <li className="widget__list-item" onClick={handleClick}>
          <img src="/src/css/icons/widget.svg" alt="widget" />
        </li>
      </ul>
    </div>
  );
}
