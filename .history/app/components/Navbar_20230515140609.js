"use client";

import Link from 'next/link';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between px-4 py-4">
      <div className="flex items-center">
        <Link href="/"className="text-2xl font-semibold">LOGO
        </Link>
      </div>
      <div className="hidden md:flex space-x-4">
        <Link href="/gallery"className="text-lg font-medium text-gray-700 hover:text-gray-900">
            Gallery
          
        </Link>
        <Link href="/events"className="text-lg font-medium text-gray-700 hover:text-gray-900">
            Events
          
        </Link>
        <Link href="/about-us"className="text-lg font-medium text-gray-700 hover:text-gray-900">
            About Us
          
        </Link>
        <Link href="/facilities">
          <a className="text-lg font-medium text-gray-700 hover:text-gray-900">
            Facilities
          </a>
        </Link>
        <Link href="/contact"className="text-lg font-medium text-gray-700 hover:text-gray-900">
            Contact
          
        </Link>
      </div>
      <div className="flex md:hidden">
        <button
          onClick={toggleMenu}
          type="button"
          className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
          aria-label="toggle menu"
        >
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
                d="M4 8h16M4 16h16"
              />
            </svg>
          ) : (
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`${
          isOpen
            ? 'translate-x-0 opacity-100'
            : 'opacity-0 -translate-x-full'
        } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}
      >
        <div className="flex flex-col md:flex-row md:mx-6">
          <Link href="/gallery"className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">
              Gallery
            
          </Link>
                   <Link href="/events"className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">
              Events
            
          </Link>
          <Link href="/about-us"className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">
              About Us
            
          </Link>
          <Link href="/facilities"className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">
              Facilities
            
          </Link>
          <Link href="/contact"className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">
              Contact
            
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

