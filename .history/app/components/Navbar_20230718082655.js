"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <nav className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-semibold pl-5">
            <Image 
              width={250}
              height={50}
              src="/image/logo.png"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            aria-label="toggle menu"
          >
            {/* Menu open icon */}
            {!isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              // Menu close icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden w-full">
            <div className="flex flex-col items-start">
              <Link href="#about" className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                About Us
              </Link>
              <Link href="#gallery" className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                Gallery
              </Link>
              <Link href="#events" className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                Events
              </Link>
              <Link href="#retreat-rooms" className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                Accomodation 
              </Link>
              <Link href="#team" className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                The Team 
              </Link>
              <Link href="#contact" className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
