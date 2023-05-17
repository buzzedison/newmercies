import Link from 'next/link';

export default function Hero() {
  return (
    // <div className="relative bg-center bg-cover h-screen" style={{ backgroundImage: "url('https://via.placeholder.com/1920')"}}>
    //   <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
    //   <div className="relative h-full flex items-center justify-center text-center">
    //     <div className="w-full max-w-2xl mx-auto">
    //       <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">New Mercies Christian Retreat Center</h1>
    //       <p className="text-white text-xl md:text-2xl mb-10">  Our goal is to provide a secluded place for Christian communities to pray and worship.</p>
    //       <div className="space-x-4">
    //         <Link href="/contact"className="px-6 py-3 bg-black text-white text-lg font-semibold rounded hover:bg-grey-600">Book Now
    //         </Link>
    //         <Link href="/services"className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded hover:bg-blue-500">Learn More
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>


    //new Hero
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  )
}
