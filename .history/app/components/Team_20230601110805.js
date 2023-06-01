import Image from 'next/image';

export default function TeamSection() {
  return (
    <div className="container mx-auto my-20 px-4 md:px-12" id="team">
      <div className="text-center">
        <h2 className="text-4xl font-bold leading-tight text-orange-600">Our Team</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <div className="bg-white rounded-lg shadow-lg h-full overflow-hidden transform transition-all hover:scale-105">
          <div className="relative align-center">
            <Image
              src="/image/founder.png"
            
              width={400}
              height={450}
              className="rounded-t-lg"
              alt="Founder Image"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold">Founder</h3>
            <p className="text-gray-600 mt-4">
              Brother Oswald Osei Agyemang is a devout follower of Jesus Christ, whose unwavering faith and commitment to
              Christian values have guided every aspect of New Mercies Christian Retreat Center. With a deep understanding
              of the transformative power of God's grace, Brother Oswald crafted an environment that fosters spiritual
              nourishment, personal healing, and a profound encounter with God.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg h-full overflow-hidden transform transition-all hover:scale-105">
          <div className="relative">
            <Image
              src="/image/manager.png"
              width={400}
              height={550}
              className="rounded-t-lg"
              alt="Grounds Manager Image"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold">Grounds Manager</h3>
            <p className="text-gray-600 mt-4">
              Mr. Innocent oversees our Guest Relations Team and is ready to assist you with planning your next corporate,
              church, or social event. He is the first point of contact for guests. He greets guests upon arrival, handles
              check-ins and check-outs, and provides general information about the retreat center and its amenities.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg h-full overflow-hidden transform transition-all hover:scale-105">
          <div className="relative">
            <Image
              src="/image/service.png"
              width={400}
              height={550}
              className="rounded-t-lg"
              alt="Service Staff Image"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold">Service Staff</h3>
            <p className="text-gray-600 mt-4">
              In New Mercies Christian Retreat Center, the service staff play a crucial role in creating a welcoming and
              memorable experience for guests. They are responsible for ensuring that guests' needs and expectations are met
              during their stay.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
