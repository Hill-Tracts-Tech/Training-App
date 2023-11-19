import img1 from "../../../assets/img/center.jpg";
import img2 from "../../../assets/img/banner_5.jpg";
import img3 from "../../../assets/img/facilities.png";
import img4 from "../../../assets/img/center.jpg";
import img5 from "../../../assets/img/baner_ratio.jpg";
import { Link } from "react-router-dom";
const ImageGallery = () => {
  const images = [img1, img2, img3, img4, img5];
  return (
    <div className="ml-3">
      <Link
        className="relative top-5 ml-5 z p-2 px-4 bg-primary  cursor-pointer  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md font-semibold text-white"
        to="/admin/imageForm"
      >
        Add Image
      </Link>
      <div className="grid grid-cols-3 mt-6 gap-2 gap-3lex-wrap justify-start bg-white shadow-lg p-5  mr-20">
        {images?.map((image, index) => (
          <div key={index}>
            <div>
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className=" -z-40 cursor-pointer hover:scale-110 ease-in-out duration-300 h-[200px] w-[300px] rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
