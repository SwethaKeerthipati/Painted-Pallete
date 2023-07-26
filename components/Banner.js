import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const artImages = [
  "https://images.unsplash.com/photo-1607211851821-8be3cd6146f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGFydHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1499892477393-f675706cbe6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGFydHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1597423243847-6a62e5dce477?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGFydHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
];

const funnyArtQuotes = [
  "Art is like a joke; if you have to explain it, it's not that good.",
  "Painting is easy when you don't know how, but very difficult when you do.",
  "Artists don't make mistakes; they make spontaneous evolutions.",
];

const Banner = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 40, // Adjust this value to create space between items
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 30, // Adjust this value to create space between items
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 20, // Adjust this value to create space between items
    },
  };

  return (
    <div className="max-w-md mx-auto">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {artImages.map((image, index) => (
          <div key={index} className="flex">
            <div className="w-full pr-2">
              <Image
                src={image}
                alt={`Art ${index + 1}`}
                className="w-full h-64 object-cover rounded-l-lg"
              />
            </div>
            <div className="w-2/4 bg-white p-4 rounded-r-lg">
              <p className="text-xl font-italic text-blue-600">
                {funnyArtQuotes[index]}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
