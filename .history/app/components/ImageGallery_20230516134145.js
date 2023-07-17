
"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function ImageGallery() {
  const images = ["/image/suite.jpg", "/image/suite2.jpg", "/image/suite3.jpg", "/image/suite4.jpg", "/image/suite5.jpg"]; // replace with your image paths
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="mt-10 container">
      <div className="w-full mb-8">
        <Image
          src={selectedImage}
          responsive="layout"
          width={900}
          height={600}
          alt="Selected Gallery Image"
          className="object-cover w-full rounded-lg shadow-lg"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {images.map((img, index) => (
          <div key={index} 
               onClick={() => setSelectedImage(img)} 
               className="cursor-pointer hover:opacity-75 transition-opacity duration-200">
            <Image
              width={150}
              height={100}
              src={img}
              alt={`Gallery Image ${index + 1}`}
              className="object-cover w-full h-full rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}








// "use client";
// import { useState } from 'react';
// import Image from 'next/image';

// export default function ImageGallery() {
//   const images = ["/image/suite.jpg", "/image/suite2.jpg", "/image/suite3.jpg", "/image/suite4.jpg", "/image/suite5.jpg"]; // replace with your image paths
//   const [selectedImage, setSelectedImage] = useState(images[0]);

//   return (
//     <div className="mt-10">
//       <div className="w-full mb-8">
//         <div className="relative h-64 md:h-auto md:aspect-w-3 md:aspect-h-2 rounded-lg shadow-lg overflow-hidden">
//           <Image
//             layout="fill"
//             src={selectedImage}
//             alt="Selected Gallery Image"
//             className="object-contain"
//           />
//         </div>
//       </div>
//       <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
//         {images.map((img, index) => (
//           <div key={index} 
//                onClick={() => setSelectedImage(img)} 
//                className="cursor-pointer hover:opacity-75 transition-opacity duration-200">
//             <Image
//               width={150}
//               height={100}
//               src={img}
//               alt={`Gallery Image ${index + 1}`}
//               className="object-cover w-full h-full rounded-lg shadow-md"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
