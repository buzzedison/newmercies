export default function ConferenceRooms() {
    const rooms = [
      {
        name: "Conference Room 1 (1st Floor)",
        price: "GHc 707",
        description: "This small, intimate space is designed to serve various purposes and can accommodate about 50 people.",
        features: ["Seating is provided", "Air-conditioning units", "Generator backup", "CCTV Camera"]
      },
      {
        name: "Conference Room 2 (Second Floor)",
        price: "GHc 707",
        description: "This small, intimate space is designed to serve various purposes and can accommodate about 50 people.",
        features: ["Seating is provided", "Air-conditioning units", "Generator backup", "CCTV Camera"]
      },
      {
        name: "Conference Room (Ground Floor)",
        price: "GHc 1010",
        description: "This is a larger space which is capable of adjusting to different purposes and accommodates 80 to 100 people.",
        features: ["Audio-visual equipment", "Toilet amenities", "Seating is provided", "Private Office", "Air-conditioning units", "Generator backup", "CCTV Camera"]
      },
      {
        name: "Conference Room (Ground Floor)",
        price: "GHc 1515",
        description: "This is a larger space which is capable of adjusting to different purposes and accommodates 100-120 people.",
        features: ["Seating is provided", "Air-conditioning units", "Toilet amenities", "Generator backup", "CCTV Camera"]
      }
    ];
  
    return (
      <div className="container mx-auto my-20 px-4 md:px-12" id="conference-rooms">
        <div className="text-center">
          <h2 className="text-4xl font-bold leading-tight text-orange-600">Conference Rooms</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-12">
          {rooms.map((room, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg">
              <div className="p-6">
                <h3 className="text-xl font-bold">{room.name}</h3>
                <p className="text-gray-600 mt-4">{room.description}</p>
                <div className="flex flex-col mt-6">
                  {room.features.map((feature, index) => (
                    <p key={index} className="flex items-center text-gray-600">
                      <span className="mr-2">
                        <svg className="w-4 h-4 fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M0 0h20v20H0z" fill="none" />
                          <path d="M14 3H6a3 3 0 0 0-3 3v8a1 1 0 1 0 2 0V6h10v10H9a1 1 0 1 0 0 2h5a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z" />
                        </svg>
                      </span>
                      {feature}
                    </p>
                  ))}
                </div>
                <div className="mt-6">
                  <button className="px-5 py-3 text-white bg-orange-500 hover:bg-orange-600 rounded-lg shadow-md transition-colors duration-300">
                    Book Now
                  </button>
                </div>
              </div>
              <div className="bg-orange-600 text-white py-3 px-6 text-center">
                <p className="text-lg font-bold">{room.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  