import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative bg-center bg-cover h-screen" style={{ backgroundImage: "url('https://via.placeholder.com/1920')"}}>
      <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="w-full max-w-2xl mx-auto">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">New Mercies Christian Retreat Center</h1>
          <p className="text-white text-xl md:text-2xl mb-10">  Our goal is to provide a secluded place for Christian communities to pray and worship.</p>
          <div className="space-x-4">
            <Link href="/contact"className="px-6 py-3 bg-black text-white text-lg font-semibold rounded hover:bg-grey-600">Book Now
            </Link>
            <Link href="/services"className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded hover:bg-blue-500">Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
