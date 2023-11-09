import { useState, useEffect } from "react";
import { imgURL } from "../../Dammydata";
import logo from "../../assets/img/logo2.png";

function Slider() {
  const [currentImgIdex, setCurrentImgIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextImage = (currentImgIdex + 1) % imgURL.length;
      setCurrentImgIndex(nextImage);
    }, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentImgIdex, imgURL.length]);

  return (
    <div className="w-[85%] mx-auto mb-9">
      <div
        className="hero h-[300px] w-full ease-in-out duration-300"
        style={{
          backgroundImage: `url(${imgURL[currentImgIdex]})`,
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <dir className="w-full">
          <div>
            {" "}
            <div className="flex justify-start gap-x-7 items-center">
              <div className="w-[90px] h-[90px] rounded-full shadow-md bg-base-300">
                <img
                  className="w-full h-full rounded-full shadow-md object-cover"
                  src={logo}
                  alt=""
                />
              </div>
              <h1 className="text-start text-3xl font-bold text-[#fff]">
                Orion
              </h1>
            </div>
            <p className="text-2xl font-semibold text-white mt-4">
              একটি অত্যাধুনিক ও বিশ্বস্ত প্রশিক্ষণ কেন্দ্র
            </p>
          </div>
        </dir>
      </div>
    </div>
  );
}

export default Slider;
