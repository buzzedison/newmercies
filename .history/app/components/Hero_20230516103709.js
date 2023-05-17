import Image from 'next/image'

export default function Hero() {
  return (
    <div className=" bg-dark opacity-90">
    <div class="carousel w-full">
      <div id="slide1" class="carousel-item relative w-full h-screen">
        <Image  
          src="/hotel.jpg"
     
          fit="cover" 
          fill="cover"
        />
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 class="text-4xl font-bold text-white leading-none md:text-6xl">Beautiful Hotel</h1>
          <p class="text-xl mt-6 font-light text-gray-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, sequi!</p>
        </div>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" class="btn btn-circle text-white bg-orange-600 hover:bg-blue-800">❮</a>  
          <a href="#slide2" class="btn btn-circle text-white bg-orange-600 hover:bg-blue-800">❯</a> 
        </div>
      </div>
      
      <div id="slide2" class="carousel-item relative w-full h-screen">
        <Image  
          src="/image/suite.jpg"
         
          fit="cover"
         fill="cover" 
        /> 
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 class="text-4xl font-bold text-white leading-none md:text-6xl">Luxury Suites</h1>
          <p class="text-xl mt-6 font-light text-gray-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, sequi!</p>
        </div>   
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" class="btn btn-circle text-white bg-blue-600 hover:bg-blue-800">❮</a>  
          <a href="#slide3" class="btn btn-circle text-white bg-blue-600 hover:bg-blue-800">❯</a> 
        </div>       
      </div>  

      {/* Slides 3 and 4... */}
    </div>
    </div>
  )
}