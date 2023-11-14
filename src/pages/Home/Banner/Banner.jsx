import "./Banner.css";
import banner from "../../../assets/img/banner.png";
import "./Banner.css";
function Banner() {
  return (
    <div className="bg-transparent">
      <div className="w-[85%] mx-auto p-4 flex flex-wrap items-center justify-between">
        <div className="w-full md:w-1/2">
          <div className="my-5">
            {" "}
            <h1 className="text-5xl text-[#ffffff] font-bold mb-2">
              Website Design And Development{" "}
              <span className="text-[#FF7810] font-normal">
                Training Institute In Habra
              </span>
            </h1>
          </div>
          <div className="my-4">
            {" "}
            <p className="text-lg">
              We provide the best hands-on training in Graphics Design, Website
              Design and Development. Join our computer center today and become
              a successful professional in the IT industry.
            </p>
          </div>
          <button className="px-5 py-2 bg-blue-500 rounded-md outline-none border-none transition duration-300 ease-in-out text-white">
            Know More
          </button>
        </div>
        <div className="bg-shape">
          <img src={banner} alt="Banner" className="w-full h-auto z-30" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
