import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-dark opacity-90">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-screen">
          <Image src="/hotel.jpg" layout="fill" objectFit="cover" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-black bg-opacity-50 p-10 rounded-lg">
            <h1 className="text-4xl font-bold text-white leading-none md:text-6xl animate-bounce">
              <span className="text-primary">New Mercies</span>
              <span className="text-blue-600">Retreat Centre</span>
            </h1>
            <p className="text-xl mt-6 font-light text-gray-200 animate-pulse">
              A peaceful setting with stunning views, comfortable accommodations, delicious food, and a variety of activities
            </p>
            <div className="mt-8">
              <button className="bg-blue-600 text-white px-6 py-3 rounded mr-4">Book Now</button>
              <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded">Learn More</button>
            </div>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full h-screen">
          <Image src="/image/suite.jpg" layout="fill" objectFit="cover" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-black bg-opacity-50 p-10 rounded-lg">
            <h1 className="text-4xl font-bold text-white leading-none md:text-6xl">Luxury Suites</h1>
            <p className="text-xl mt-6 font-light text-gray-200">
              Our luxury suites feature spacious living and sleeping areas, as well as a private balcony or patio with stunning views. Our suites are equipped with all the amenities you need to relax and pamper yourself
            </p>
            <div className="mt-8">
              <button className="bg-blue-600 text-white px-6 py-3 rounded mr-4">Book Now</button>
              <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded">Learn More</button>
            </div>
          </div>
        </div>

        {/* Slides 3 and 4... */}
      </div>
    </div>
  );
}
