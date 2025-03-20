import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { arrUrl } from '../_constants';
import Layout from './Layout';
import EventsManagment from './pages/EventsManagment';
import TicketSales from './pages/TicketSales';
import Weather from './ui/Weather';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <TicketSales /> },
      { path: '/events', element: <EventsManagment /> },
      ...arrUrl.map(elem => ({
        path: elem.path,
        element: <div>{elem.path}</div>,
      })),
    ],
  },

  { path: '/weather', element: <Weather /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
