import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a
              href="mailto:gshiva0018@gmail.com"
              className="text-gray-700 hover:text-yellow-500 transition"
              aria-label="Email"
            >
              <AiFillMail size={24} />
            </a>
            <a
              href="https://github.com/shivakumargattu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-yellow-500 transition"
              aria-label="GitHub"
            >
              <AiFillGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/shiva-kumar-gattu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-yellow-500 transition"
              aria-label="LinkedIn"
            >
              <AiFillLinkedin size={24} />
            </a>
          </div>
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Shiva Kumar Gattu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;