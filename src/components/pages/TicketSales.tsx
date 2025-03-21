import { useState } from 'react';

import MainContent from '../MainContent';
import SearchBar from '../ui/SearchBar';

export default function TicketSales() {
  const [isToggled, setWidgetToggle] = useState(false);
  return (
    <div>
      <SearchBar setWidgetToggle={setWidgetToggle} />
      <MainContent toggle={isToggled} />
    </div>
  );
}
