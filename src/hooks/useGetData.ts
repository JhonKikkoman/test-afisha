import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

type useGetDataT = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request: (...args: any[]) => Promise<AxiosResponse<unknown>>;
  params?: unknown;
};

const useGetData = ({ request, params }: useGetDataT) => {
  const [data, setData] = useState<unknown | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await request(params);
      if (response.data) {
        setData(response.data);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка запроса');
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
