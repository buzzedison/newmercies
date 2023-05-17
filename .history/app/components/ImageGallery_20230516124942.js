"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function ImageGallery() {
  const images = ["/image/suite.jpg", "/image/suite2.jpg", "/image/suite3.jpg", "/image/suite4.jpg", "/image/suite5.jpg"]; // replace with your image paths
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex justify-between mt-10">
      <div className="w-3/12">
        {images.map((img, index) => (
          <div key={index} 
               onClick={() => setSelectedImage(img)} 
               className="mb-4 cursor-pointer hover:opacity-75 transition-opacity duration-200">
            <Image
              width={150}
              height={100}
              src={img}
              alt={`Gallery Image ${index + 1}`}
              className="object-contain w-full h-full rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
      <div className="w-9/12 pl-8">
        <Image
          width={900}
          height={700}
          src={selectedImage}
          alt="Selected Gallery Image"
          className="object-contain w-full h-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
