import React from 'react';

import Calendar from './containers/Calendar/Calendar';
import Header from './layers/Header/Header';
import Organizer from './components/Organizer/Organizer';

import './App.scss';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="calendar-wrap">
        <Organizer />
        <Calendar />
      </div>
    </div>
  );
}

export default App;
