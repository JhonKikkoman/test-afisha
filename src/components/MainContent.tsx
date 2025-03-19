interface Idata {
  id: number;
  downloadUrl: string;
  quote: string;
  day: string;
  city: string;
  perfomance: string;
  location: string;
  price: string;
}

// fakeData
const data: Idata[] = Object.keys(
  import.meta.glob('/src/css/images/*.png', { query: 'url' }),
).map((url, index) => ({
  id: index,
  downloadUrl: url,
  quote: index === 3 ? 'Пелагея. Долгожданный концерт' : '',
  day: '14 мая',
  city: 'Симферополь',
  perfomance: 'Пт. 19:00',
  location: 'Симферополь, Крымский Музыкальный Театр',
  price: '1500 - 2500',
}));

export default function MainContent() {
  const handleClick = ({ target }: React.MouseEvent) => {
    console.log(target);
  };
  return (
    <div className="main__content">
      <div className="main__content-body">
        <div className="board">
          <ul className="board__list">
            {data.map(
              ({
                id,
                downloadUrl,
                quote,
                day,
                city,
                perfomance,
                location,
                price,
              }) => (
                <li className="board__item" key={id}>
                  <div className="card">
                    <div className="card__mask">
                      <span className="card__mask-quote">{quote}</span>
                      <button
                        className="card__mask-button"
                        type="button"
                        onClick={handleClick}
                      >
                        Подробнее
                      </button>
                    </div>
                    <div className="card__image">
                      <span className="card__image-badge">{city}</span>
                      <img src={downloadUrl} alt="poster" />
                    </div>
                    <div className="card__description">
                      <div className="card__description-date">
                        <span className="date-day">{day}</span>
                        <span className="date-perfomance">{perfomance}</span>
                      </div>
                      <div className="card__description-text">{location}</div>
                      <div className="card__description-price">
                        <span className="currency">₽</span>
                        <span>{price}</span>
                      </div>
                    </div>
                  </div>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
