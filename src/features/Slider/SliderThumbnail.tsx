"use client";
import React from "react";
import { useState, useEffect, useCallback } from "react";
import { BiChevronLeft, BiChevronRight, BiPause, BiPlay } from "react-icons/bi";
const images = [
  "/thumbnail/meala.jpg",
  "/thumbnail/thumbnaila.jpg",
  "/thumbnail/thumbnailb.jpg",
  "/thumbnail/thumbnailc.jpg",
];
const SliderThumbnail = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };
  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };
  useEffect(() => {
    let slideInterval: NodeJS.Timeout | null = null;
    if (isPlaying) {
      slideInterval = setInterval(() => {
        nextSlide();
      }, 3000); // Change slide every 3 seconds
    }
    return () => {
      if (slideInterval) {
        clearInterval(slideInterval);
      }
    };
  }, [isPlaying, nextSlide]);

  return (
    <section className="relative w-full max-w-6xl h-56 md:h-[550px] m-auto group">
      <div
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
        className="w-full h-full bg-center bg-contain bg-no-repeat md:bg-cover rounded-lg hover:border-2 border-blue-500 ease-in duration-500"
      ></div>
      {/* absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BiChevronLeft onClick={prevSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BiChevronRight onClick={nextSlide} size={30} />
      </div>
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              slideIndex === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
      {/* Autoplay toggle */}
      <div
        className="absolute bottom-4 right-4 cursor-pointer bg-black/20 rounded-full p-2"
        onClick={toggleAutoplay}
      >
        {isPlaying ? (
          <BiPause size={24} className="text-white" />
        ) : (
          <BiPlay size={24} className="text-white" />
        )}
      </div>
    </section>
  );
};

export default SliderThumbnail;
