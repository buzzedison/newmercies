"use client"
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-orange-600 text-white py-10 mt-16">
      <div className="container mx-auto px-8 md:flex justify-between items-center">
        <div className="text-center md:text-left pb-8 md:pb-0">
          <h3 className="font-bold text-xl">New Mercies Retreat Center</h3>
          <p className="mt-2">1234 Street Name, City, State, Zip</p>
          <p className="mt-2">info@newmerciesretreat.com | (123) 456-7890</p>
        </div>
        <div className="flex justify-center md:justify-end">
          <a href="#" className="text-white hover:text-orange-400 mx-2">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-white hover:text-orange-400 mx-2">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-white hover:text-orange-400 mx-2">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-white hover:text-orange-400 mx-2">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
      <div className="border-t border-white mt-10 pt-10 container mx-auto px-8 md:flex justify-between items-center">
        <div className="text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} New Mercies Retreat Center. All rights reserved.</p>
        </div>
        <div className="text-center md:text-right">
          <a href="#" className="text-white hover:text-orange-400 mx-2">Terms of Service</a>
          <a href="#" className="text-white hover:text-orange-400 mx-2">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
