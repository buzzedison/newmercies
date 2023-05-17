import Image from 'next/image'

export default function Cards() {
  return (
    <div class="grid grid-cols-2 gap-4">
      <div class="card w-64 bg-white border shadow-md">
        <figure>
          <Image  
            src="https://images.unsplash.com/photo-1542103752-8ef59b94a1d5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            width={360}
            height={240}
            alt="Facility"
          />
        </figure>
        <div class="px-6 py-4 text-center">
          <div class="font-bold text-xl mb-2" onMouseOver={() => {document.getElementById("facility_text").style.display = "block"}}>
            Facility  
          </div>
          <p class="text-gray-700 text-base" id="facility_text" style={{display:"none"}}>
            Our retreat facilities and amenities are designed to be restorative and help you reconnect.
          </p>
        </div>
      </div> 

      <div class="card w-64 bg-white border shadow-md">
        {/* Additional cards...*/}
      </div>
    </div>
  )
}
