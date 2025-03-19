// "размапить" иконки через ul>li и настроить их функционал
export default function Widget() {
  const handleClick = ({ target }: React.MouseEvent) => {
    console.log(target);
  };

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
