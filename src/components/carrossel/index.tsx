import React from 'react';

const ImageCarousel = () => {
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

    const [currentImage, setCurrentImage] = React.useState(0);

    const handleNext = () => {
        setCurrentImage((currentImage + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentImage((currentImage - 1 + images.length) % images.length);
    };

    return (
        <div className="flex items-center">
            <button className="bg-gray-200 p-2" onClick={handlePrev}>
                Previous
            </button>
            <img src={images[currentImage]} alt="carousel" className="w-64 h-64" />
            <button className="bg-gray-200 p-2" onClick={handleNext}>
                Next
            </button>
        </div>
    );
};

export default ImageCarousel;