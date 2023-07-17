import Image from 'next/image'
import Link from 'next/link'

export default function Section() {
  return (
    <div className="container mx-auto my-20 px-4 md:px-12" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="col-span-1 pr-5 pl-12">
          <Image 
            src="/image/family.jpg"
            width={500}
            height={800}
            className="rounded-3xl shadow-lg"
            alt="Retreat Center Image"
          />
        </div>
        <div className="col-span-1 pl-10">
          <h2 className="text-4xl font-bold leading-tight text-orange-600">About Us</h2>
          <p className="text-gray-600 mt-6">
            New Mercies Christian Retreat Center has its foundation in Isaiah 55:6. <br/>
            <span className="font-semibold text-lg text-orange-600 py-2">
              “Seek the Lord while he may be found; call on him while he is near.” 
            </span>
            We strive to provide a welcoming environment to Christians, helping them to discern, experience, and contemplate God in all things. Christians, 
            in our experience, ought to dedicate themselves to a time for prayer. 
            <br/>
            For this reason, we are here to nourish your walk with God, and we endeavor to provide a setting for closeness with God, biblical study, and seeking God's face within the constraints of a safe space.
            <br/>
            A very warm welcome awaits your visit.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-3 mt-8 text-white bg-black hover:bg-orange-600 rounded-lg shadow-md transition-colors duration-300"
          >
            Book Your Next Retreat
          </Link>
        </div>
        <div className="col-span-2 mt-16">
          <h2 className="text-4xl font-bold leading-tight text-orange-600">Core Values</h2>
          <ul className="list-disc list-inside text-gray-600 mt-6">
            <li>Service to all - We devote ourselves completely to those we serve and their needs.</li>
            <li>Christ-like - We endeavor to be Christ to others while also meeting Christ in others.</li>
            <li>Respect - We endeavor first to meet, understand, and appreciate each individual.</li>
            <li>Listen - We pay close attention to each person and what they say to us.</li>
            <li>Hospitality - We endeavor to make everyone feel welcome and at peace.</li>
            <li>Innovative - We want to offer God more honor by constantly improving our services.</li>
          </ul>
        </div>
      </div>
    </div>
  )  
}
