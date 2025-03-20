interface IArrUrl {
  id: number;
  downloadUrl: string;
  path: string;
}

export const arrUrl: IArrUrl[] = Object.keys(
  import.meta.glob('/src/css/icons/drawerIcon/*.png', { query: 'url' }),
).map((url, index) => ({
  id: index + 1,
  downloadUrl: url,
  path: url.slice(url.lastIndexOf('/') + 1).split('.')[0],
}));
