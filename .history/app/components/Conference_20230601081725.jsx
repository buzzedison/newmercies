"use client";
import Image from 'next/image';
import { useState } from 'react';

export default function ConferenceRooms() {
  // ...

  // Define a local state to manage hover status
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="container mx-auto my-20 px-4 md:px-12" id="conference-rooms">
      <div className="text-center">
        <h2 className="text-4xl font-bold leading-tight text-orange-600">Conference Rooms</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-12">
        {rooms.map((room, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-lg shadow-lg transform transition-transform duration-500 ${index === hoveredIndex ? 'scale-105' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={room.image}
                alt={room.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold">{room.name}</h3>
              <p className="text-gray-600 mt-4">{room.description}</p>
              <div className="flex flex-col mt-6">
                {room.features.map((feature, index) => (
                  // ...
                ))}
              </div>
              <div className="flex justify-between items-center mt-8">
                <div className="bg-orange-600 text-white px-6 py-2 rounded-lg">
                  <p className="text-lg font-bold">{room.price}</p>
                </div>
                <button className="px-5 py-3 text-white bg-orange-500 hover:bg-orange-600 rounded-lg shadow-md transition-colors duration-300">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
