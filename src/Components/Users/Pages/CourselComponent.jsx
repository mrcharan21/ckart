import React, { useState } from "react";
import image1 from "../../../assets/Images/image1.jpeg";
import image2 from "../../../assets/Images/image2.jpeg";
import image3 from "../../../assets/Images/image3.jpeg";

const slides = [
  { id: 1, src: image1, alt: "Slide 1" },
  { id: 2, src: image2, alt: "Slide 2" },
  { id: 3, src: image3, alt: "Slide 3" },
];

export default function CarouselComponent() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div
      className="relative overflow-hidden rounded-lg mx-auto"
      style={{
        Width: "100%", // Carousel container max width
        height: "250px", // Fixed height
      }}
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <img
            key={slide.id}
            src={slide.src}
            alt={slide.alt}
            className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-700 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            } carousel-image`}
          />
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-blue-600" : "bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 z-20"
        aria-label="Previous Slide"
      >
        &#10094;
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 z-20"
        aria-label="Next Slide"
      >
        &#10095;
      </button>
    </div>
  );
}
