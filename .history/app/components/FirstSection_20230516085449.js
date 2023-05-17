import Image from 'next/image'

export default function Section() {
  return (
    <div className="container">
    <div class="flex items-center my-20">
      <div className="w-1/2 pr-5 pl-12 ">
        <Image className="rounded-3xl"
          src="/image/suite.jpg"
          width={500}
          height={800}
         
         
        />
      </div>
      <div class="w-1/2 pl-10">
        <h2 class="text-4xl font-bold leading-tight">A Place to Retreat, and Relax</h2>
        <p class="text-gray-600 mt-6">Our retreat center is a place where you can come to escape the hustle and bustle of everyday life. We offer a variety of 
        amenities and activities to help you relax and rejuvenate</p>
        <a
          href="#"
          class="inline-flex items-center justify-center px-5 py-3 mt-8 text-white bg-blue-600 rounded-lg shadow-md"
        >
          Call to Action
        </a>
      </div>
    </div>
    </div>
  )  
}