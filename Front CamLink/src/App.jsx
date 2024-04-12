import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Components/Routing';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import ParticlesComponent from './Components/ParticlesBg';





function App() {
  
  return (
    <BrowserRouter>
      
      <div className='app flex flex-col justify-between h-[] ' >
        <ParticlesComponent id = "particles"/>
        <Header />
            <Routing />
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
