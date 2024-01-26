import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-gray-500 py-6">
    <hr className='border'/>
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-4 mt-4">
          <a
            href="mailto:gshiva0018@gmail.com"
            className="text-black hover:text-yellow-300"
          >
            <FaEnvelope size={38} />
          </a>
          <a
            href="https://github.com/shivakumargattu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-yellow-300"
          >
            <AiFillGithub size={38}/>
          </a>
          <a
            href="https://www.linkedin.com/in/shiva-kumar-gattu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-yellow-300"
          >
            <AiFillLinkedin size={38} />
          </a>
        </div>
        <p className="mt-2">&copy; 2024 Shiva Gattu. All Rights Reserved.</p>
      </div>
    </footer>
  );
};



export default Footer