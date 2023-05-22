"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function Section() {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  return (
    <div className="container mx-auto my-20 px-4 md:px-12" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="col-span-1 pr-5 pl-12">
          <Image
            src="/image/family.jpg"
            width={500}
            height={800}
            className="rounded-3xl shadow-lg"
            alt="Retreat Center Image"
          />
        </div>
        <div className="col-span-1 pl-10">
          <h2 className="text-4xl font-bold leading-tight text-orange-600">About Us</h2>
          <p className="text-gray-600 mt-6">
            New Mercies Christian Retreat Center has its foundation in Isaiah 55:6. <br />
            <span className="font-semibold text-lg text-orange-600 py-2">
              “Seek the Lord while he may be found; call on him while he is near.”
            </span>
            We strive to provide a welcoming environment to Christians, helping them to discern, experience, and
            contemplate God in all things. Christians, in our experience, ought to dedicate themselves to a time for
            prayer.
            <br />
            For this reason, we are here to nourish your walk with God and we endeavor to provide a setting for
            closeness with God, biblical study, and seeking God's face within the constraints of a safe space.
            <br />
            A very warm welcome awaits your visit.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-3 mt-8 text-white bg-black hover:bg-orange-600 rounded-lg shadow-md transition-colors duration-300"
          >
            Book Your Next Retreat
          </Link>
        </div>
        <div className="col-span-2 mt-16">
          <div
            className="border border-gray-300 rounded-lg p-4 cursor-pointer"
            onClick={toggleAccordion}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-bold leading-tight text-orange-600">Core Values</h2>
              {accordionOpen ? (
                <IoIosArrowUp size={24} className="text-orange-600" />
              ) : (
                <IoIosArrowDown size={24} className="text-orange-600" />
              )}
            </div>
            {accordionOpen && (
              <div className="mt-6">
                <div className="border-t border-gray-300 pt-4">
                  <h3 className="text-2xl font-bold text-gray-800">Service to all</h3>
                  <p className="text-gray-600 mt-2">
                    We devote ourselves completely to those we serve and their needs.
                  </p>
                </div>
                <div className="border-t border-gray-300 pt-4">
                  <h3 className="text-2xl font-bold text-gray-800">Christ-like</h3>
                  <p className="text-gray-600 mt-2">
                    We endeavor to be Christ to others while also meeting Christ in others.
                  </p>
                </div>
                <div className="border-t border-gray-300 pt-4">
                  <h3 className="text-2xl font-bold text-gray-800">Respect</h3>
                  <p className="text-gray-600 mt-2">
                    We endeavor first to meet, understand, and appreciate each individual.
                  </p>
                </div>
                <div className="border-t border-gray-300 pt-4">
                  <h3 className="text-2xl font-bold text-gray-800">Listen</h3>
                  <p className="text-gray-600 mt-2">We pay close attention to each person and what they say to us.</p>
                </div>
                <div className="border-t border-gray-300 pt-4">
                  <h3 className="text-2xl font-bold text-gray-800">Hospitality</h3>
                  <p className="text-gray-600 mt-2">
                    We endeavor to make everyone feel welcome and at peace.
                  </p>
                </div>
                <div className="border-t border-gray-300 pt-4">
                  <h3 className="text-2xl font-bold text-gray-800">Innovative</h3>
                  <p className="text-gray-600 mt-2">
                    We want to offer God more honor by constantly improving our services.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
