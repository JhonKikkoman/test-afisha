import { Outlet } from 'react-router-dom';

import NavBar from './ui/NavBar';

export default function Layout() {
  return (
    <main className="wrapper container">
      <NavBar />
      <Outlet />
    </main>
  );
}
