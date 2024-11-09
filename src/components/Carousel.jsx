import { useState } from "react";

// Assuming you have some images for the carousel
const images = [
  "sport.avif", 
  "her.webp", 
  "heroimage.png",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-3xl">
     
      <div className="relative">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-[600px] object-cover rounded-3xl transition-all duration-500"
        />
        
      
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true">
            <path fillRule="evenodd" d="M13.293 3.293a1 1 0 011.414 1.414L8.414 10l6.293 6.293a1 1 0 01-1.414 1.414l-7-7a1 1 0 010-1.414l7-7z" clipRule="evenodd" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true">
            <path fillRule="evenodd" d="M6.707 3.293a1 1 0 011.414 1.414L11.586 10l-3.465 3.465a1 1 0 11-1.414-1.414L9.828 10l-3.543-3.543a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
