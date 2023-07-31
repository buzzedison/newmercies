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
    <div className="" id="contact">
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
            src="https://goo.gl/maps/GhPKSF1wqgb2hhuV8"
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
            
            
