import Image from "next/image"

export default function SecondSection() {
  return (
    <div>
         <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">A Place to Retreat, and Relax</h1>
            <p className="mt-6 text-gray-500 dark:text-gray-500 text-lg">
            New Mercies Retreat Centre is a place where you can come to escape the hustle and bustle of everyday life. We offer a variety 
            of amenities and activities to help you relax and rejuvenate
                obcaecati illum mollitia.</p>
            <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
                Start 14-Day free trial
            </button>
            <p className="mt-3 text-sm text-gray-400 ">No credit card required</p>
        </div>

        <div class="flex justify-center mt-10">
            <Image 
            width={700}
            height={500}
            className="object-cover w-full h-96 rounded-xl lg:w-4/5"
             src="/image/suite.jpg" />
        </div>
    </div>
    </div>
  )
}
