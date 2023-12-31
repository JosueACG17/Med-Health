/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { TiArrowBack, TiArrowForward } from "react-icons/ti";

const API_URL = `https://api.thecatapi.com/v1/`;
const API_KEY = "live_7Dn7IcSDYxAMI9XBSYhKErYCsGP8rs4jlGM780ww1ebMypQeil1pyPMk6mR2LqB0";
const NUMBER_OF_IMAGES = 5; // Número de imágenes a obtener

const KittyCarousel = () => {
  const [images, setImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetch(`${API_URL}images/search?limit=${NUMBER_OF_IMAGES}&width=1080`, {
      headers: { 'x-api-key': API_KEY }
    })
      .then(response => response.json())
      .then(data => {
        // Filtrar para excluir los GIFs
        const filteredImages = data.filter(img => !img.url.endsWith('.gif'));
        setImages(filteredImages);
      })
      .catch(error => console.log(error));
  }, []);

  const goToPrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div id="gallery" className="relative mx-auto my-4" style={{ width: '75%' }}>
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((img, index) => (
          <div
            key={img.id}
            className={`duration-600 ease-in-out ${index === activeIndex ? 'block' : 'hidden'} w-full h-full`}
          >
            <img src={img.url} className="w-full h-full object-cover object-center" alt="Cute Kitty" />
          </div>
        ))}
      </div>
      <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={goToPrevious}>
        <TiArrowBack className='bg-sky-500 rounded-full w-10 h-10'></TiArrowBack>
      </button>
      <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={goToNext}>
        <TiArrowForward className='bg-sky-500 rounded-full w-10 h-10'></TiArrowForward>
      </button>
    </div>

  );
};

export default KittyCarousel;
