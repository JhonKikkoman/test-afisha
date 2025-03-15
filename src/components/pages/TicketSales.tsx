import { getCurrentWeather } from '../../api/weather';
import useGetData from '../../hooks/useGetData';

export default function TicketSales() {
  const { data } = useGetData({
    request: getCurrentWeather,
    params: 'Simferopol',
  });
  console.log(data);

  return <div>TicketSales</div>;
}
