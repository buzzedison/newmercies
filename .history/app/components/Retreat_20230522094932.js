import Image from 'next/image';

export default function RetreatRooms() {
  return (
    <div className="container mx-auto my-20 px-4 md:px-12" id="retreat-rooms">
      <div className="text-center">
        <h2 className="text-4xl font-bold leading-tight text-orange-600">Retreat Rooms</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-12">
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <Image
              src="/image/suite.jpg"
              width={600}
              height={400}
              className="rounded-t-lg"
              alt="Mini Suite Image"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-orange-600">Mini Suite</h3>
            <p className="text-gray-300 mt-4">
              Our mini suites provide a view with a roofed, open-air gallery with standard bedrooms intended for single occupancy, a queen bed, with lounge space, wardrobe, Fan, an ensuite bathroom with heater, TV, A.C., dressing table mirror with a chair.
            </p>
            <div className="mt-6 text-orange-600 font-bold">GHc365 / Costs Per Night</div>
          </div>
        </div>
        {/* Repeat the above card structure for the other retreat rooms */}
        {/* Standard Suite */}
        {/* Masters Suite */}
        {/* Executive Suite */}
      </div>
    </div>
  );
}
