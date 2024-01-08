import { useState } from "react";
import { useGetImagesQuery } from "../../redux/features/gallery/galleryApi";
import { ImageUrl } from "../../utils/imageUrl";
import Loader from "../../components/Loader/Loader";

const Gallery = () => {
  const { data: images, isLoading, isError, error } = useGetImagesQuery();

  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  let content = null;

  if (isLoading) {
    content = (
      <div>
        <Loader type={"Image"} />
      </div>
    );
  } else if (!isLoading && isError) {
    content = <div>{error}</div>;
  } else {
    content = (
      <div className="w-[85%] mx-auto">
        {" "}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
          {images?.data?.map((image, index) => (
            <div key={index} onClick={() => openImage(image)}>
              <img
                src={`${ImageUrl}/gallery/${image?.image}`}
                alt={`Image ${index + 1}`}
                className="w-full cursor-pointer hover:scale-110 ease-in-out duration-300"
              />
            </div>
          ))}

          {selectedImage && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-90 z-[9999999]">
              <div className="max-w-screen-xl w-full h-full relative">
                <img
                  src={`${ImageUrl}/gallery/${selectedImage?.image}`}
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
  }

  return content;
};

export default Gallery;
