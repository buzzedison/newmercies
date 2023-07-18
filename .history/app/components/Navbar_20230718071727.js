"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <Link href="/">
                  <a className="flex items-center py-4 px-2">
                    <Image 
                      width={250}
                      height={50}
                      src="/image/logo.png"
                      alt="Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <Link href="/gallery" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Gallery</Link>
                <Link href="/events" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Events</Link>
                <Link href="/about-us" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About Us</Link>
                <Link href="/facilities" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Facilities</Link>
                <Link href="/contact" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact</Link>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
                {isOpen ? <FiX className="w-6 h-6"/> : <FiMenu className="w-6 h-6"/>}
              </button>
            </div>
          </div>
          {isOpen && (
            <div className="mobile-menu md:hidden">
              <Link href="/gallery" className="block py-2 px-4 text-sm hover:bg-gray-200 transition duration-300">Gallery</Link>
              <Link href="/events" className="block py-2 px-4 text-sm hover:bg-gray-200 transition duration-300">Events</Link>
              <Link href="/about-us" className="block py-2 px-4 text-sm hover:bg-gray-200 transition duration-300">About Us</Link>
              <Link href="/facilities" className="block py-2 px-4 text-sm hover:bg-gray-200 transition duration-300">Facilities</Link>
              <Link href="/contact" className="block py-2 px-4 text-sm hover:bg-gray-200 transition duration-300">Contact</Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
