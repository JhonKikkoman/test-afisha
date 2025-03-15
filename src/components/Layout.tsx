import { Outlet } from 'react-router-dom';

import NavBar from './ui/NavBar';

export default function Layout() {
  return (
    <div className="container">
      <NavBar />
      <Outlet />
    </div>
  );
}
