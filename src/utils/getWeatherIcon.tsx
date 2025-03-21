//@ts-expect-error // no types for library
import * as WeatherIcons from 'weather-icons-react';

const iconCodeMap = {
  '01d': WeatherIcons.WiDaySunny,
  '01n': WeatherIcons.WiNightClear,
  '02d': WeatherIcons.WiDayCloudy,
  '02n': WeatherIcons.WiNightAltCloudy,
  '03d': WeatherIcons.WiCloud,
  '03n': WeatherIcons.WiCloud,
  '04d': WeatherIcons.WiCloudy,
  '04n': WeatherIcons.WiCloudy,
  '09d': WeatherIcons.WiShowers,
  '09n': WeatherIcons.WiShowers,
  '10d': WeatherIcons.WiDayRain,
  '10n': WeatherIcons.WiNightAltRain,
  '11d': WeatherIcons.WiThunderstorm,
  '11n': WeatherIcons.WiThunderstorm,
  '13d': WeatherIcons.WiSnow,
  '13n': WeatherIcons.WiSnow,
  '50d': WeatherIcons.WiFog,
  '50n': WeatherIcons.WiFog,
};

export function getWeatherIcon(iconCode: string | undefined) {
  let ComponentIcon;
  if (iconCode) {
    ComponentIcon = iconCodeMap[iconCode as keyof typeof iconCodeMap];
  } else {
    ComponentIcon = WeatherIcons.WiDaySunny;
  }
  return (
    <>
      <span>
        <ComponentIcon size={40} color="#0088ff" />
      </span>
    </>
  );
}
