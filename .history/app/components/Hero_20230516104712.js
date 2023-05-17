import Image from 'next/image'

export default function Hero() {
  return (
    <div className="bg-dark opacity-90">
      <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full h-screen">
          <Image  
            src="/hotel.jpg"
            fit="cover"
            fill="cover"  
          />
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 class="text-4xl font-bold text-white leading-none md:text-6xl animate-bounce">New Mercies Retreat Centre</h1>  
            <p class="text-xl mt-6 font-light text-gray-200 animate-pulse">A peaceful setting with stunning views, comfortable accommodations 
              delicious food,  
              a variety of activities</p>
          </div>
          {/* Rest of slide... */}
        </div>

        <div id="slide2" class="carousel-item relative w-full h-screen">
          <Image  
            src="/image/suite.jpg"          
            fit="cover"
            fill="cover"  
          />
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 class="text-4xl font-bold text-white leading-none md:text-6xl">Luxury Suites</h1>
            <p class="text-xl mt-6 font-light text-gray-200">Our luxury suites feature spacious living and sleeping areas, as well as a private balcony or patio with stunning views.  
              Our suites are equipped with all the amenities you need to relax and pamper yourself</p>  
          </div>
          {/* Rest of slide... */}
        </div>

        {/* Slides 3 and 4... */}
      </div>
    </div>
  )
}
