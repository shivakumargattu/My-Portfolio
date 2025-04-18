import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './componets/Navbar';
import HeroSection from './componets/HeroSection';
import ContactForm from "./componets/ContactForm"
import About from './componets/About';
import ProjectList from './componets/projects/ProjectList';
import Footer from './componets/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-slate-100 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16"> {/* Add padding-top to account for fixed navbar */}
          <HeroSection />
          <ProjectList />
          <About />
          <ContactForm/>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;