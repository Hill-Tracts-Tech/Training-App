import img from "../../../assets/img/howToVisit.png";
import TextUnderline from "../../../utils/textUnderline";
import "./VisitUs.css";
function VisitUs() {
  return (
    <div className="bg-pattern">
      <div className="w-[85%] flex flex-col md:flex-row mx-auto gap-x-8 gap-y-3 justify-center items-center">
        <div className="w-full md:w-1/2 bounce">
          <img src={img} alt="" />
        </div>
        <div className="w-full md:w-1/2 p-6">
          <div>
            <h1 className="text-4xl text-[#ffffff] my-5 font-bold">
              How To Visit Learn Computer Academy?
            </h1>
            <TextUnderline custom_width={150} />
          </div>
          <div>
            <p className="leading-8 mt-4">
              Our institute is Located in Habra, a township of West Bengal
              India. We are situated in a locality called, Saptapally. We are at
              15 mins walking distance from Habra Station and 5 mins from Habra
              Bus stand. Please click the button below to view our location in
              google maps.
            </p>
            <button className="px-5 py-2 bg-blue-500 rounded-md outline-none border-none transition duration-300 ease-in-out text-white mt-6">
              Open Map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default VisitUs;
