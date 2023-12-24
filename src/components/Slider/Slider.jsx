import logo from "../../assets/icons/OCI.jpg";
import { useState, useEffect } from "react";
import { useGetThumbnailsQuery } from "../../redux/features/thumbnail/thumbnailApi";
import { ImageUrl } from "../../utils/imageUrl";

function Slider() {
  const { data: thumbnailData } = useGetThumbnailsQuery();

  const [currentImgIdex, setCurrentImgIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextImage = (currentImgIdex + 1) % thumbnailData?.data?.length;
      setCurrentImgIndex(nextImage);
    }, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentImgIdex, thumbnailData?.data?.length]);

  return (
    <div className="lg:w-[85%] mx-auto mb-9">
      <div
        className="hero h-[300px] w-full ease-in-out duration-300"
        style={{
          backgroundImage: `url(${`${ImageUrl}/banners/${thumbnailData?.data[currentImgIdex]?.image} `})`,
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
                  className="w-full h-full rounded-full shadow-md object-contain"
                  src={logo}
                  alt=""
                />
              </div>
              <h1 className="text-start text-3xl font-bold text-[#fff]">
                {thumbnailData?.data[currentImgIdex]?.title}
              </h1>
            </div>
            <p className="text-2xl font-semibold text-white mt-4">
              {thumbnailData?.data[currentImgIdex]?.desc}
            </p>
          </div>
        </dir>
      </div>
    </div>
  );
}

export default Slider;
