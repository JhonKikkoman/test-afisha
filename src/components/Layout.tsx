import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Drawer from './ui/Drawer';
import NavBar from './ui/NavBar';

export default function Layout() {
  const [selected, setSelected] = useState(0);
  return (
    <main className="wrapper container">
      <Drawer selected={selected} newSelect={setSelected} />
      <div className="main">
        <NavBar reset={setSelected} />
        <Outlet />
      </div>
    </main>
  );
}
