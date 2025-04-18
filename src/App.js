import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroSection from './componets/HeroSection';
import About from './componets/About';
import ProjectList from './componets/projects/ProjectList';
import Footer from './componets/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-slate-100 min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <ProjectList />
              <About />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;