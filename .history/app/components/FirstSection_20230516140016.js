"use client";
import Image from 'next/image'
import { FaRegHandPeace, FaRegBuilding, FaRegSmileBeam, FaRegCalendarAlt } from 'react-icons/fa';

export default function Section() {
  return (
    <div className="container mx-auto my-20 px-4 md:px-12">
      <div className="flex items-center">
        <div className="w-full md:w-1/2 pr-5 pl-12 ">
          <Image 
            src="/image/suite.jpg"
            width={500}
            height={800}
            className="rounded-3xl shadow-lg"
            alt="Retreat Center Image"
          />
        </div>
        <div className="w-full md:w-1/2 pl-10">
          <h2 className="text-4xl font-bold leading-tight text-orange-600">About Us</h2>
          <div className="flex items-center text-orange-600 mt-6">
            <FaRegHandPeace className="mr-2"/>
            <p>New Mercies Retreat Center is a Christian retreat center that provides a place for people to rest, relax, and connect with God.</p>
          </div>
          <div className="flex items-center text-orange-600 mt-6">
            <FaRegBuilding className="mr-2"/>
            <p>We are also happy to host your event at our center. We have a variety of spaces that can accommodate a variety of events, from small gatherings to large conferences.</p>
          </div>
          <div className="flex items-center text-orange-600 mt-6">
            <FaRegSmileBeam className="mr-2"/>
            <p>Our goal is to create a peaceful and tranquil environment where people can come to find peace, healing, and hope. We believe that everyone is welcome at New Mercies Retreat Center, regardless of their background or beliefs.</p>
          </div>
          <div className="flex items-center text-orange-600 mt-6">
            <FaRegCalendarAlt className="mr-2"/>
            <p>We invite you to come and visit us soon!</p>
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mt-8 text-white bg-orange-500 hover:bg-orange-600 rounded-lg shadow-md transition-colors duration-300"
          >
            Book Your Next Retreat
          </a>
        </div>
      </div>
    </div>
  )  
}
