import { Outlet } from 'react-router-dom';

import Drawer from './ui/Drawer';
import NavBar from './ui/NavBar';

export default function Layout() {
  return (
    <main className="wrapper container">
      <Drawer />
      <div className="main">
        <NavBar />
        <Outlet />
      </div>
    </main>
  );
}
