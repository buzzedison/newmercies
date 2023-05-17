"use client";

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className=" bg-orange-50 ">
    <div className="container py-12 mx-auto my-20 px-4 md:px-12">
      <h2 className="text-4xl font-bold leading-tight text-center mb-10">Contact Us</h2>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 pr-5 pl-12 mb-10 md:mb-0">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-sm font-bold">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-bold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-sm font-bold">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded resize-none"
                required
              ></textarea>
            </div>
            <button type="submit" className="px-5 py-3 text-white bg-orange-500 hover:bg-orange-600 rounded-lg shadow-md transition-colors duration-300">
              Send Message
            </button>
          </form>
        </div>
        <div className="w-full h-full md:w-1/2 pl-10">
          <iframe
            title="Map"
            src="https://www.google.com/maps/place/Action+chapel-+Nmai+Dzorn/@5.6816681,-0.1230721,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf831b66546d03:0xe1706ba3d56d6c0c!8m2!3d5.6816681!4d-0.1204972!16s%2Fg%2F11rg6wxn09|https://www.google.com/maps/place/Action+chapel-+Nmai+Dzorn/@5.6816681,-0.1230721,17[...]ba3d56d6c0c!8m2!3d5.6816681!4d-0.1204972!16s%2Fg%2F11rg6wxn09"
            className="w-full h-64 rounded-lg shadow-md"
            allowFullScreen=""
            loading="lazy"
            ></iframe>
            </div>
            </div>
            </div>
            </div>
            );
            }
            
            
