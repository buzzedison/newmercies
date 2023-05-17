import Image from 'next/image'

export default function Section() {
  return (
    <div className="container">
    <div class="flex items-center my-20">
      <div className="w-1/2 pr-5 pl-12 rounded-xl">
        <Image 
          src="/image/suite.jpg"
          width={500}
          height={800}
         
         
        />
      </div>
      <div class="w-1/2 pl-10">
        <h2 class="text-4xl font-bold leading-tight">Headings look nice large and bold</h2>
        <p class="text-gray-600 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
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