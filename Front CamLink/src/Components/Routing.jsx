import React from 'react';
import { Routes, Route } from 'react-router-dom';


import LandingPage from '../Pages/LandingPage';
import About from '../Pages/About';
import LoginPage from '../Pages/LoginPage';
import SignUP from '../Pages/SignUP';
import HomePage from '../Pages/HomePage'
import CamLinkPage from '../Pages/CamLinkPage'
import ScreenSharing from '../Pages/ScreenSharing';

function Routing() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/About' element={<About />} />
      <Route path='/SignUp' element={<SignUP />} />
      <Route path='/LogIn' element={<LoginPage />} />
      <Route path='/Home' element={<HomePage />} />
      <Route path='/CamLink' element={<CamLinkPage />} />
      <Route path='/ScreenShare' element={<ScreenSharing />} />
    </Routes>
  );
}

export default Routing;
