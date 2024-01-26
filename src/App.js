// App.js
import React from 'react';

import HeroSection from './componets/HeroSection';
import AddProjectForm from './componets/AddProjectForm';
import About from './componets/About';
import Footer from './componets/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
    <div className=' bg-slate-100'>      

    <BrowserRouter>
      <Routes>
      <Route path='/' element={<div>

      <HeroSection/>
      <AddProjectForm/>
      <About/>
      
      </div>}/>
        <Route path="/about" element={<About />}/>
          
          <Route path="/projects" element={<AddProjectForm />} />
          
      </Routes>
      <Footer/>
    </BrowserRouter>
      </div>

    </>
  );
};

export default App;
