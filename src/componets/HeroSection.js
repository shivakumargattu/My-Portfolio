import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-white to-yellow-50 py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-yellow-500">Shiva Kumar</span>
            </h1>
            <h2 className="text-2xl text-gray-600 mb-6">
              Full Stack Developer
            </h2>
            <p className="text-lg mb-8">
              I build exceptional digital experiences with modern web technologies.
            </p>
            <div className="flex gap-4">
              <Link 
                to="#projects" 
                className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition"
              >
                View My Work
              </Link>
              <a 
                href="#contact" 
                className="bg-white text-black px-6 py-3 border-2 border-black rounded-lg font-bold hover:bg-gray-100 transition"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://img.freepik.com/free-photo/horizontal-shot-serious-looking-male-model-keeps-arms-folded-doesnt-like-shopping-feels-bored-spending-time-with-wife-purchasing-wears-glasses-jumper-isolated-yellow-wall_273609-42383.jpg" 
              alt="Shiva Kumar"
              className="rounded-lg shadow-xl w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;