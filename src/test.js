import React, { useState } from 'react';
import ComputerImage from './assets/home/student-849825_1280.jpg'; // Import the image correctly
import './ImageList.css'; // You can create a separate CSS file

function ImageList() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const images = [
    {
      src: ComputerImage, // Use the imported image
      alt: 'Image 1',
      introText: 'Intro for Image 1',
    },
    {
      src: ComputerImage, // Use the imported image
      alt: 'Image 2',
      introText: 'Intro for Image 2',
    },
    // Add more image objects as needed
  ];

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="image-list">
      {images.map((image, index) => (
        <div
          key={index}
          className={`image-container ${hoveredItem === index ? 'hovered' : ''}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <img className="image" src={image.src} alt={image.alt} />
          <div className={`intro ${hoveredItem === index ? 'visible' : ''}`}>
            <p>{image.introText}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImageList;
