
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Components/Routing';
import Header from './Pages/Header';
import Footer from './Pages/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col h-screen justify-between app'>
        <Header />
        <Routing />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
