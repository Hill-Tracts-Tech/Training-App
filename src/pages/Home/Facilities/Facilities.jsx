import { facilities } from "../../../Dammydata";
import TextUnderline from "../../../utils/textUnderline";
import pattern from "../../../assets/img/pattern.png";
import "./Facilities.css";

function Facilities() {
  return (
    <div className="bg-[#F3F6FF] mt-8 py-10">
      <div className="w-[85%] mx-auto relative">
        <div className="text-black absolute left-[50%] top-[60%] translate-x-[-50%] translate-y-[-50%] z-10">
          <img className="pattern" src={pattern} alt="" />
        </div>
        <div>
          <div className="text-center">
            <div className="w-[300px] mx-auto">
              <h2 className="text-3xl bg-[#FF7810] text-white">
                Why Choose Us
              </h2>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-4xl text-[#1C2045] my-5 font-bold">
                Course Fees Chart For Learn
                <br /> Computer Academy
              </h1>
              <TextUnderline custom_width={150} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-start mt-9">
            {facilities.map((data) => (
              <div
                className="flex flex-col justify-center items-center py-10 px-8 hover:shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 rounded-md cursor-pointer z-30"
                key={data.id}
              >
                <img src={data.icon} alt="" />
                <h1 className="text-justify text-2xl">{data.title}</h1>
                <p className="text-center">{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Facilities;
