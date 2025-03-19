interface IArrUrl {
  id: number;
  downloadUrl: string;
}

const arrUrl: IArrUrl[] = Object.keys(
  import.meta.glob('/src/css/icons/drawerIcon/*.png', { query: 'url' }),
).map((url, index) => ({ id: index, downloadUrl: url }));

export default function Drawer() {
  return (
    <aside className="side-bar">
      <div className="side-bar__wrapper">
        <div className="side-bar__header">
          <span className="drawer__icon-wrapper drawer__icon">
            <img src="/src/css/icons/menu-icon.png" alt="menu" loading="lazy" />
          </span>
        </div>
        <span className="divider"></span>
        <div className="side-bar__body">
          <ul className="side-bar__list">
            {arrUrl.map(({ id, downloadUrl }) => (
              <li className="side-bar__item" key={id}>
                <div className="drawer__icon-wrapper">
                  <span className="drawer__icon">
                    <img src={downloadUrl} alt="icon" loading="lazy" />
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <span className="divider"></span>
      </div>
    </aside>
  );
}
