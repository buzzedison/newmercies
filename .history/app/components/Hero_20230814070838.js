"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';

SwiperCore.use([Navigation]);

export default function Hero() {
  return (
    <div className="relative w-full h-screen">
      <Swiper
        navigation
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="carousel-item w-full h-screen">
            <Image src="/image/building.png"
            fill="cover"
             fit="cover" className="z-10" />
            <div className="absolute inset-0 bg-black bg-opacity-50 z-20"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-30">
              <h1 className="text-4xl font-bold text-white leading-tight md:text-6xl">
              New Mercies Christian
            Retreat Centre
              </h1>
              <p className="text-xl mt-6 font-light text-gray-200 max-w-lg mx-auto">
                A peaceful setting with stunning views, comfortable accommodations, delicious food, and a variety of activities
              </p>
              <div className="mt-8">
               <Link href="#contact"><button className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold mr-4">Book Now</button></Link> 
               <Link href="#learn"> <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold">Learn More</button>  </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="carousel-item w-full h-screen">
            <Image src="/image/luxury.png" 
           fill="cover" fit="cover" className="z-10" />
            <div className="absolute inset-0 bg-black bg-opacity-50 z-20"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-30">
              <h1 className="text-5xl font-bold text-white leading-tight md:text-7xl">Luxury Suites</h1>
              <p className="text-xl mt-6 font-light text-gray-200 max-w-lg mx-auto">
                Our luxury suites feature spacious living and sleeping areas, as well as a private balcony or patio with stunning views. Our suites are equipped with all the amenities you need to relax and pamper yourself
              </p>
              <div className="mt-8">
                <Link href="#contact"><button className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold mr-4">Book Now</button>
                </Link>
                <Link href="#about"><button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold">Learn More</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* More SwiperSlide components for additional slides... */}
      </Swiper>
    </div>  
    );

}