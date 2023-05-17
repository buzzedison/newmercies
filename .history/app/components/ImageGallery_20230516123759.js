"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function ImageGallery() {
  const images = ["/image/suite.jpg", "/image/suite2.jpg", "/image/suite3.jpg", , "/image/suite5.jpg"]; // replace with your image paths
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex justify-between mt-10">
      <div className="w-1/2 pr-4">
        {images.map((img, index) => (
          <div key={index} onClick={() => setSelectedImage(img)} className="mb-4 cursor-pointer">
            <Image
              width={200}
              height={150}
              src={img}
              alt={`Gallery Image ${index + 1}`}
              className="object-cover w-full h-full rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
      <div className="w-1/2 pl-4">
        <Image
          width={800}
          height={600}
          src={selectedImage}
          alt="Selected Gallery Image"
          className="object-cover w-full h-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
