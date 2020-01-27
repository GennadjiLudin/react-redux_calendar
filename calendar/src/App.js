import React from 'react';

import Calendar from './containers/Calendar/Calendar';
import Header from './layers/Header/Header';
import Footer from './layers/Footer/Footer';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Calendar />
      <Footer />
    </>
  );
}

export default App;
