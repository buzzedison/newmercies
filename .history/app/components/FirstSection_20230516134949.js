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
        <p class="text-gray-600 mt-6">About us

New Mercies Retreat Center is a Christian retreat center that provides a place for people to rest, relax, and connect with God. We offer a variety of services and amenities

We are also happy to host your event at our center. We have a variety of spaces that can accommodate a variety of events, from small gatherings to large conferences. We also have a team of experienced staff who can help you plan and execute your event.
Our goal is to create a peaceful and tranquil environment where people can come to find peace, healing, and hope. We believe that everyone is welcome at New Mercies Retreat Center, regardless of their background or beliefs.
We invite you to come and visit us soon!
</p>
        <a
          href="#"
          class="inline-flex items-center justify-center px-5 py-3 mt-8 text-white bg-blue-600 rounded-lg shadow-md"
        >
     Book Your Next Retreat
        </a>
      </div>
    </div>
    </div>
  )  
}