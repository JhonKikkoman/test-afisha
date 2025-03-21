import { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

type argsT = string | number | unknown;

interface IData {
  main: { temp: number };
  name: string;
  weather: { id: number; main: string; description: string; icon: string }[];
}

type useGetDataT = {
  request: (args: argsT) => Promise<AxiosResponse<IData>>;
  params?: unknown;
};

type errorT = string | null | { message: string; cod: string };

const useGetData = ({ request, params }: useGetDataT) => {
  const [data, setData] = useState<null | IData>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<errorT>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await request(params);
      if (response) {
        setData(response.data);
      }
    } catch (err) {
      const _e =
        err instanceof AxiosError ? err.response?.data : 'Ошибка запроса';
      setError(_e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, error };
};

export default useGetData;
