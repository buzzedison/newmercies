"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function ImageGallery() {
  const images = ["/image/suite.jpg", "/image/suite2.jpg", "/image/suite3.jpg", "/image/suite4.jpg", "/image/suite5.jpg"]; // replace with your image paths
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col md:flex-row justify-between mt-10">
      <div className="w-full md:w-3/12 mb-8 md:mb-0">
        {images.map((img, index) => (
          <div key={index} 
               onClick={() => setSelectedImage(img)} 
               className="mb-4 cursor-pointer hover:opacity-75 transition-opacity duration-200">
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
      <div className="w-full md:w-9/12 md:pl-8">
        <div className="relative h-64 md:h-auto md:aspect-w-3 md:aspect-h-2 rounded-lg shadow-lg overflow-hidden">
          <Image
            layout="fill"
            src={selectedImage}
            alt="Selected Gallery Image"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}