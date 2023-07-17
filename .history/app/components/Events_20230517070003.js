"use client";
import Image from 'next/image'

export default function EventPage() {
  return (
    <div className="bg-orange-50">
    <div className="container mx-auto my-20 px-4 md:px-12">
      <div className="flex flex-wrap justify-center items-center">
       
        <div className="w-full md:w-1/2 pl-10">
          <h2 className="text-4xl font-bold leading-tight text-orange-600">Host Your Next Event at New Mercies Retreat Center</h2>
          <p className="text-gray-600 mt-6">
            New Mercies Retreat Center is a beautiful and serene setting for your next event. We offer a variety of spaces that can accommodate a variety of events, from small gatherings to large conferences. We also have a team of experienced staff who can help you plan and execute your event.
            <br/>
            Our conference halls are perfect for church services, church retreats, and engagements. We also have rooms available for booking for single use and groups who hold events in our event spaces.
            <br/>
            Our goal is to create a memorable and enjoyable experience for your guests. We believe that everyone is welcome at New Mercies Retreat Center, regardless of their background or beliefs.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mt-8 text-white bg-orange-500 hover:bg-orange-600 rounded-lg shadow-md transition-colors duration-300"
          >
            Book Your Event
          </a>
        </div>
        <div className="w-full md:w-1/2 pr-5 pl-12 ">
          <Image 
            src="/image/suite5.jpg"
            width={500}
            height={800}
            className="rounded-3xl shadow-lg"
            alt="Event Image"
          />
        </div>
      </div>
    </div>
    </div>
  )  
}
