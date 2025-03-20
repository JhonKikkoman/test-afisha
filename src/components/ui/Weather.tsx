import { getCurrentWeather } from '../../api/weather';
import useGetData from '../../hooks/useGetData';
import { getWeatherIcon } from '../../utils/getWeatherIcon';

export default function Weather() {
  const { data, error, loading } = useGetData({
    request: getCurrentWeather,
    params: 'Симферополь',
  });

  if (error) {
    return <div>{typeof error !== 'string' ? error.message : error}</div>;
  }
  if (loading) return <div>Загрузка...</div>;

  return (
    <div className="weather__main container">
      <div className="weather__container">
        <div className="weather__inner">
          <div className="weather__header">
            <h3 className="title">{data?.name}</h3>
          </div>
          <div className="weather__body">
            <div className="weather__description">
              <div className="weather__description-icon">
                <span className="weather__icon description-item">
                  {getWeatherIcon(data?.weather[0].icon)}
                </span>
              </div>
              <span className="weather__temp description-item">
                {data ? `${Math.ceil(data?.main.temp)} градуса` : null}
              </span>
              <span className="weather__desc description-item">
                {data?.weather[0].description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
