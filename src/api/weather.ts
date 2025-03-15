import { instance } from './instance';

const { get } = instance;

const key = import.meta.env.VITE_API_KEY;

export const getCurrentWeather = (countryName: string) =>
  get(`/2.5/weather?q=${countryName}&lang=ru&appid=${key}&units=metric`);
