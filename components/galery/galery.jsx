'use client'

import React, { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CardGalery from "./cardGalery";

const Galery = ({ infoSlide }) => {
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  const isMobile = window.innerWidth <= 768;
  const itemsPerSlide = isMobile ? 1 : 4;

  const nextImage = useCallback(() => {
    setCurrentBackgroundIndex((prevIndex) =>
      (prevIndex + 1) % infoSlide.length
    );
  }, [infoSlide.length]);

  const prevImage = useCallback(() => {
    setCurrentBackgroundIndex((prevIndex) =>
      (prevIndex - 1 + infoSlide.length) % infoSlide.length
    );
  }, [infoSlide.length]);

  useEffect(() => {
    const interval = setInterval(nextImage, 2000);
    return () => clearInterval(interval);
  }, [nextImage]);
  

  return (
    <div className="relative">
      <div className="flex justify-center items-center">
        <button
          className="text-3xl text-white bg-black p-2 rounded-full opacity-50 hover:opacity-75 focus:outline-none"
          onClick={prevImage}
        >
          <FaChevronLeft />
        </button>
        <div className="flex w-full">
          {infoSlide.map((image, index) => (
            index >= currentBackgroundIndex &&
            index < currentBackgroundIndex + itemsPerSlide && (
              <CardGalery
                key={index}
                image={image.image}
                title={image.title}
              />
            )
          ))}
        </div>
        <button
          className="text-3xl text-white bg-black p-2 rounded-full opacity-50 hover:opacity-75 focus:outline-none"
          onClick={nextImage}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Galery;
