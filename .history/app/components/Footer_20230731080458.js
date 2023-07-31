"use client"
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-orange-600 text-white py-11">
      <div className="container mx-auto px-8 md:flex justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="font-bold text-2xl mb-2 pt-4">New Mercies Retreat Center</h3>
          <p className="mb-1">Nmai Dzorn Papafio Hills Rd, Ghana</p>
          <p>+233244631905</p>
        </div>
        <div className="flex justify-center md:justify-end space-x-4">
          <a href="#" className="text-white hover:text-orange-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.facebook.com/NewMerciesChristianRetreatCenter?mibextid=LQQJ4d" className="text-white hover:text-orange-400">
            <FaFacebook size={24} />
          </a>
          <a href="https://instagram.com/new_mercies_retreat_center?igshid=MzRlODBiNWFlZA==" className="text-white hover:text-orange-400">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-white hover:text-orange-400">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
      <div className="border-t border-white mt-4 pt-4 container mx-auto px-8 md:flex justify-between items-center">
        <div className="text-center md:text-left">
          <p className="text-sm">&copy; {new Date().getFullYear()} New Mercies Retreat Center. All rights reserved.</p>
        </div>
        <div className="mt-4 md:mt-0 text-center md:text-right space-x-4">
          <a href="#" className="text-white hover:text-orange-400 text-sm">Terms of Service</a>
          <a href="#" className="text-white hover:text-orange-400 text-sm">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
