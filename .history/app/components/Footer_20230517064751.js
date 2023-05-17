"use client"
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-orange-600 text-white pt-10">
      <div className="container mx-auto px-8 md:flex justify-between items-center">
        <div className="text-center md:text-left space-y-2">
          <h3 className="font-bold text-2xl">New Mercies Retreat Center</h3>
          <p>Nmai Dzorn Papafio Hills Rd, Ghana</p>
          <p>+233244631905</p>
        </div>
        <div className="mt-6 md:mt-0 flex justify-center md:justify-end space-x-4">
          <a href="#" className="text-white hover:text-orange-400">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-white hover:text-orange-400">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-white hover:text-orange-400">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-white hover:text-orange-400">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
      <div className="border-t border-white mt-10 pt-10 container mx-auto px-8 md:flex justify-between items-center mb-2">
        <div className="text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} New Mercies Retreat Center. All rights reserved.</p>
        </div>
        <div className="mt-4 md:mt-0 text-center md:text-right space-x-4">
          <a href="#" className="text-white hover:text-orange-400">Terms of Service</a>
          <a href="#" className="text-white hover:text-orange-400">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
