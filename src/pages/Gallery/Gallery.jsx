import { useState } from "react";
import Image1 from "../../assets/img/center.jpg"; // Import your images
import Image2 from "../../assets/img/facilities.png";
import Image3 from "../../assets/img/howToVisit.png";
import Image4 from "../../assets/img/center.jpg";
import Image5 from "../../assets/img/facilities.png";
import Image6 from "../../assets/img/howToVisit.png";
import Image7 from "../../assets/img/center.jpg";
import Image8 from "../../assets/img/facilities.png";

const Gallery = () => {
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
  ];
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-[85%] mx-auto">
      {" "}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {images.map((image, index) => (
          <div key={index} onClick={() => openImage(image)}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full cursor-pointer hover:scale-110 ease-in-out duration-300"
            />
          </div>
        ))}

        {selectedImage && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-90 z-[9999999]">
            <div className="max-w-screen-xl w-full h-full relative">
              <img
                src={selectedImage}
                alt="Zoomed In Image"
                className="w-full h-full object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
                onClick={closeImage}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
