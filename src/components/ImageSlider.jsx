import React, { useState, useEffect } from 'react';
import './styles/ImageSlider.css';

const ImageSlider = ({ images, autoPlayInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const isRtl = document.documentElement.dir === 'rtl';

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(nextSlide, autoPlayInterval);
      return () => clearInterval(timer);
    }
  }, [isPaused, autoPlayInterval]);

  return (
    <div className="cont">
      <div
        className="slider"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button className="left-arrow" onClick={prevSlide}>
          ❮
        </button>

        <div
          className="slides-container"
          style={{
            transform: `translateX(${isRtl ? currentIndex * 100 : -currentIndex * 100}%)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          {images.map((image, idx) => (
            <div key={idx} className="slide">
              <div className="text-layer">
                <h1 className="slide-title">{image.title}</h1>
                <p className="slide-text">{image.text}</p>
              </div>

              <div className="overlay"></div>

              <img
                className="slide-image"
                src={image.src}
                alt={`Slide ${idx}`}
              />
            </div>
          ))}
        </div>

        <button className="right-arrow" onClick={nextSlide}>
          ❯
        </button>
      </div>

      <div className="dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={currentIndex === idx ? 'dot active' : 'dot'}
            onClick={() => setCurrentIndex(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
