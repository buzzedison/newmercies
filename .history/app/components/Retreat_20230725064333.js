"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function RetreatRooms() {
  const retreatRooms = [
    {
      title: 'Mini Suite',
      image: '/image/minisuite.png',
      description:
        'Our mini suites provide a view with a roofed, open-air gallery with standard bedrooms intended for single occupancy, a queen bed, with lounge space, wardrobe, Fan, an ensuite bathroom with heater, TV, A.C., dressing table mirror with a chair.',
      price: 'GHc365 / Costs Per Night',
    },
    {
      title: 'Standard Suite',
      image: '/image/standard suite.jpeg',
      description:
        'Our standard suites feature compact bedrooms ideal for single occupancy, a lounge space, a wardrobe, an ensuite bathroom with a heater, and a mini fridge, A.C., Fan, TV, and dressing table mirror with a chair.',
      price: 'GHc430 / Costs Per Night',
    },
    {
      title: 'Masters Suite',
      image: '/image/suite2.jpg',
      description:
        'The master suite has a queen-sized bedroom that can accommodate two people. There is a seating area, ample storage, a mini fridge, A.C., Fan, an ensuite bathroom with a heater, TV, dressing table mirror with a chair.',
      price: 'GHc610 / Costs Per Night',
    },
    {
      title: 'Executive Suite',
      image: '/image/suite3.jpg',
      description:
        'The executive room has a view and a roofed, open-air gallery and a queen-sized bedroom that can accommodate two people. There is a lounge area, A.C, Fan wardrobe, an ensuite bathroom with heater, TV, dressing table mirror with chair and a mini fridge.',
      price: 'GHc730 / Costs Per Night',
    },
  ];

  return (
    <div className="container mx-auto my-20 px-4 md:px-12" id="retreat-rooms">
      <div className="text-center">
        <h2 className="text-4xl font-bold leading-tight text-orange-600">Retreat Rooms</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-12">
        {retreatRooms.map((room, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 hover:bg-gray-700 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="relative">
              <Image
                src={room.image}
                width={600}
                height={400}
                className="rounded-t-lg"
                alt={`${room.title} Image`}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-orange-600">{room.title}</h3>
              <p className="text-gray-300 mt-4">{room.description}</p>
              <div className="mt-6">
                <div className="text-orange-600 font-bold">{room.price}</div>
                <button className="mt-4 px-4 py-2 bg-orange-600 text-gray-100 rounded-md hover:bg-orange-700 transition-colors duration-300">
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
