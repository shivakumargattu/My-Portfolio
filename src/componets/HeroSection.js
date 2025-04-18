import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from "react-router-dom";

const navigation = [
  { name: 'About', to: "/about" },
  { name: 'Projects', to: "/projects" },
  { name: 'Contact', to: "/contact" },
];

const HeroSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative bg-slate-100 overflow-hidden">
      {/* Navigation */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="font-bold text-xl">Shiva Kumar Gattu</span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-yellow-500 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="font-bold text-xl">Shiva Kumar Gattu</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      {/* Hero Content */}
      <div className="relative pt-24 pb-16 sm:pb-24 lg:pt-32 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-8">
              <h2 className="text-2xl text-yellow-500 mb-2">Full Stack Developer</h2>
              <h1 className="text-4xl font-bold text-gray-900 mb-6 sm:text-5xl">
                Hello, I'm Shivakumar Gattu
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                A Full Stack Developer proficient in modern web technologies, passionate about crafting seamless and efficient web experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="bg-yellow-500 text-gray-900 px-6 py-3 rounded font-bold hover:bg-yellow-600 transition"
                >
                  View Projects
                </Link>
                <a
                  href="https://www.linkedin.com/in/shiva-kumar-gattu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-6 py-3 border-2 border-black rounded font-bold hover:bg-blue-50 transition"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <img
                className="w-full rounded-lg shadow-xl"
                src="https://img.freepik.com/free-photo/horizontal-shot-serious-looking-male-model-keeps-arms-folded-doesnt-like-shopping-feels-bored-spending-time-with-wife-purchasing-wears-glasses-jumper-isolated-yellow-wall_273609-42383.jpg"
                alt="Developer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;