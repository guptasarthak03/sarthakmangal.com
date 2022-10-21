import React from 'react';

const CarouselContainer = ({ children }) => {
  return (
    <div className="carousel-container">
      <div className="carousel-items">{children}</div>
    </div>
  );
};

export default CarouselContainer;
