"use client";
import { useState } from 'react';
import Link from "next/link";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

 
  return (
    <div>
      <nav className="fixed top-0 w-full bg-white text-gray-600 shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-20">
            <Link href="/" className="text-2xl font-bold text-gray-600">
              Image
            </Link>

            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-400"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen ? 'true' : 'false'}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            <div className="hidden lg:flex space-x-8 items-center justify-center w-full pl-8"> 
              <Link 
                href="#" 
                className={`text-sm ${activeLink === 'Home' ? 'text-blue-500 hover:text-blue-300' : 'text-gray-600 hover:text-gray-400'} font-semibold`} 
                onClick={() => handleLinkClick('Home')}
              >
                Home
              </Link>
              <Link 
                href="#" 
                className={`text-sm ${activeLink === 'Sick Leave Certificate' ? 'text-blue-500 hover:text-blue-300' : 'text-gray-600 hover:text-gray-400'} font-semibold`}  
                onClick={() => handleLinkClick('Sick Leave Certificate')}
              >
                Sick Leave Certificate
              </Link>
              <Link 
                href="#" 
                className={`text-sm ${activeLink === 'Fitness Certificate' ? 'text-blue-500 hover:text-blue-300' : 'text-gray-600 hover:text-gray-400'} font-semibold`} 
                onClick={() => handleLinkClick('Fitness Certificate')}
              >
                Fitness Certificate
              </Link>
              <Link 
                href="#" 
                className={`text-sm ${activeLink === 'Form 1A for Driving Licence' ? 'text-blue-500 hover:text-blue-300' : 'text-gray-600 hover:text-gray-400'} font-semibold`} 
                onClick={() => handleLinkClick('Form 1A for Driving Licence')}
              >
                Form 1A for Driving Licence
              </Link>
              <Link 
                href="#" 
                className={`text-sm ${activeLink === 'International Medical Certificate' ? 'text-blue-500 hover:text-blue-300' : 'text-gray-600 hover:text-gray-400'} font-semibold`}  
                onClick={() => handleLinkClick('International Medical Certificate')}
              >
                International Medical Certificate
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden`} id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            <Link 
              href="#" 
              className={`text-gray-600 block px-3 py-2 rounded-md text-base font-medium ${activeLink === 'Home' ? 'text-blue-500 hover:text-blue-300' : 'text-gray-600 hover:text-gray-400'} font-semibold`}  
              onClick={() => handleLinkClick('Home')}
            >
              Home
            </Link>
            <Link 
              href="#" 
              className={`text-gray-600 block px-3 py-2 rounded-md text-base font-medium ${activeLink === 'Sick Leave Certificate' ? 'text-blue-500 hover:text-blue-300' : 'text-gray-600 hover:text-gray-400'} font-semibold`}  
              onClick={() => handleLinkClick('Sick Leave Certificate')}
            >
              Sick Leave Certificate
            </Link>
            <Link 
              href="#" 
              className={`text-gray-600 block px-3 py-2 rounded-md text-base font-medium ${activeLink === 'Fitness Certificate' ? 'text-blue-500 hover:text-blue-300' : 'text-gray-600 hover:text-gray-400'} font-semibold`} 
              onClick={() => handleLinkClick('Fitness Certificate')}
            >
              Fitness Certificate
            </Link>
            <Link 
              href="#" 
              className={`text-gray-600 block px-3 py-2 rounded-md text-base font-medium ${activeLink === 'Form 1A for Driving Licence' ? 'text-blue-500 hover:text-blue-300' : 'text-gray-600 hover:text-gray-400'} font-semibold`} 
              onClick={() => handleLinkClick('Form 1A for Driving Licence')}
            >
              Form 1A for Driving Licence
            </Link>
            <Link 
              href="#" 
              className={`text-gray-600 block px-3 py-2 rounded-md text-base font-medium ${activeLink === 'International Medical Certificate' ? 'text-blue-500 hover:text-blue-300' : 'text-gray-600 hover:text-gray-400'} font-semibold`} 
              onClick={() => handleLinkClick('International Medical Certificate')}
            >
              International Medical Certificate
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;