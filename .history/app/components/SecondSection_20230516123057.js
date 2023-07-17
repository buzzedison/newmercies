import Image from "next/image";
import ImageGallery from "./ImageGallery";

export default function SecondSection() {
  return (
    <div className="flex flex-col justify-center bg-orange-50 py-20">
      <div className="px-6 mx-auto text-center sm:w-3/4 lg:w-2/3 xl:w-1/2">
        <h1 className="text-4xl font-semibold text-gray-800 dark:text-white lg:text-5xl mb-4">
          A Place to Retreat and Relax
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          New Mercies Retreat Centre is a place where you can escape the hustle and bustle of everyday life. We offer a variety of amenities and activities to help you relax and rejuvenate.
        </p>
        <button className="mt-10 px-8 py-3 text-lg font-semibold text-white bg-orange-600 rounded-full shadow-lg hover:bg-orange-500 focus:outline-none transition-colors duration-200">
          View Gallery
        </button>
      </div>

      <div className="flex justify-center mt-16">
       <ImageGallery />
      </div>
    </div>
  );
}
