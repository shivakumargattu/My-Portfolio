import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <Link to="/" className="text-xl font-bold text-gray-800">
            Shiva Kumar
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="text-gray-800 hover:text-yellow-500 transition"
            >
              Home
            </Link>
            <a 
              href="#projects" 
              className="text-gray-800 hover:text-yellow-500 transition"
            >
              Projects
            </a>
            <a 
              href="#about" 
              className="text-gray-800 hover:text-yellow-500 transition"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-gray-800 hover:text-yellow-500 transition"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link 
              to="/" 
              className="block text-gray-800 hover:text-yellow-500 transition"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <a 
              href="#projects" 
              className="block text-gray-800 hover:text-yellow-500 transition"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a 
              href="#about" 
              className="block text-gray-800 hover:text-yellow-500 transition"
              onClick={toggleMenu}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="block text-gray-800 hover:text-yellow-500 transition"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;