import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './Layout';
import EventsManagment from './pages/EventsManagment';
import TicketSales from './pages/TicketSales';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <TicketSales /> },
      { path: '/events', element: <EventsManagment /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
