import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative hero">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
        <Image 
  src="/suite.jpg"
  alt="Hero image"
  fit="cover"
  fill="cover"
  placeholder="blur" 
  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=" 
/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>  
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        {/* Additional carousel slides...*/}
      </div> 

      <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
      <div className="relative h-full flex items-center justify-center text-center">
        {/* Content... */}
      </div>
    </div>
  )
}