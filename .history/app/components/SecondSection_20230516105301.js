import Image from "next/image";

// A functional component that renders the second section of the website
export default function SecondSection() {
  // Return the JSX elements for the section
  return (
    // Use a div element with margin-top and flexbox classes
    <div className="mt-10 flex flex-col items-center">
      // Use a div element with padding, margin and text-center classes
      <div className="px-6 py-16 mx-auto text-center">
        // Use a div element with max-width and margin classes
        <div className="max-w-lg mx-auto">
          // Use a h1 element with text size, font weight, color and responsive classes
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
            A Place to Retreat, and Relax
          </h1>
          {/* // Use a p element with margin-top, text size, color and responsive classes */}
          <p className="mt-6 text-gray-500 dark:text-gray-500 text-lg">
            New Mercies Retreat Centre is a place where you can come to escape
            the hustle and bustle of everyday life. We offer a variety of
            amenities and activities to help you relax and rejuvenate obcaecati
            illum mollitia.
          </p>
          {/* // Use a button element with padding, margin-top, text size, font weight, color, background color, border radius, hover effect, responsive and focus classes */}
          <button className="px-10 py-2 mt-6 text-lg font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
            View Gallery
          </button>
        </div>

        {/* // Use a div element with flexbox and margin-top classes */}
        <div className="flex justify-center mt-10">
          {/* // Use the Image component from next/image with width, height, class name and source props */}
          <Image
            width={700}
            height={500}
            className="object-cover w-full h-96 rounded-xl lg:w-4/5"
            src="/image/suite.jpg"
          />
        </div>
      </div>
    </div>
  );
}
