import Image from "next/image";

export default function ImageGallery() {
  const images = ["/image/suite.jpg", "/image/suite.jpg", "/image/suite.jpg", "/image/suite.jpg"]; // replace with your image paths

  return (
    <div className="flex flex-wrap justify-center mt-10 gap-4">
      {images.map((img, index) => (
        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
          <Image
            width={400}
            height={300}
            src={img}
            alt={`Gallery Image ${index + 1}`}
            className="object-cover w-full h-full rounded-lg shadow-md"
          />
        </div>
      ))}
    </div>
  );
}
