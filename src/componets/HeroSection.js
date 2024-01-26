import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";

const navigation = [
  { name: 'About',to:"/about" },
  { name: 'Projects ',to:"/projects",},
  { name: 'contat us', to:"/contact"},
  
]

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute bg-gradient-to-r from-white via-white to-yellow-500 inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <h1 className='font-bold'>ShivaKumar Gattu</h1>
            </a>
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
             <Link to={item.to}> <a key={item.name}  className="text-sm font-semibold leading-6 hover:text-white text-gray-900">
                {item.name}
              </a>
              </Link>
            ))}
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                
                <h1 className='font-bold'>ShivaKumar Gattu</h1>
              </a>
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
                   <Link to={item.to}> <a
                      key={item.name}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a></Link>
                  ))}
                </div>
                
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate  bg-slate-100 px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#fcfcfa] to-[#fffffc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
    
        <div className=" text-gray-500">
      <div className="max-w-5xl mx-auto py-10 lg:flex lg:items-center">
        {/* Left div with text */}
        <div className="lg:w-1/2 py-20 lg:mr-8">
        <h2 className='text-2xl  text-yellow-400'>Full Stack Developer</h2>
          <h1 className="text-4xl text-gray-700 font-bold mb-4"> Hello, my name is Shivakumar Gattu </h1>
          <p className="text-lg mb-6">
            
A Full Stack Developer proficient in HTML, CSS, JavaScript, React.js, Node.js, Express.js, Tailwind CSS, and MongoDB, with a passion for crafting seamless and efficient web experiences.

          </p>
        <Link to="/projects">  <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded font-bold">
          Projects
        </button></Link>
        <button className="bg-white text-black px-6 py-2 mx-4 border-2 border-black  rounded font-bold hover:bg-blue-100">
          Linkedin
        </button>
        </div>

        {/* Right div with image */}
        <div className="lg:w-1/2">
          <img
            className="object-cover object-center rounded-lg"
            src="https://img.freepik.com/free-photo/horizontal-shot-serious-looking-male-model-keeps-arms-folded-doesnt-like-shopping-feels-bored-spending-time-with-wife-purchasing-wears-glasses-jumper-isolated-yellow-wall_273609-42383.jpg?w=826&t=st=1706197089~exp=1706197689~hmac=89d1d59bd1495face96f50057eac84b37f867cd75a08379d99b65505fd7a0cab"
            alt="Developer"
          />
        </div>
      </div>
    </div>

      </div>
    </div>
  )
}
