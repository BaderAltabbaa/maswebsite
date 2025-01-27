import React, { useState, useEffect } from 'react';

const ProfileImageSlider = ({ images, autoPlayInterval = 3000 }) => {
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
    
    <div className="profile-cont">
      <div
        className="profile-slider"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button className="profile-left-arrow" onClick={prevSlide}>
          ❮
        </button>

        
        <div
          className="profile-slides-container"
          style={{
            transform: `translateX(${isRtl ? currentIndex * 100 : -currentIndex * 100}%)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          {images.map((image, idx) => (
            <div key={idx} className="profile-slide">
              <img
                className="profile-slide-image"
                src={image.src}
                alt={`profile-Slide ${idx + 1}`}
              />
            </div>
          ))}
        </div>

        <button className="profile-right-arrow" onClick={nextSlide}>
          ❯
        </button>
      </div>

      
      <div className="profile-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ProfileImageSlider;
