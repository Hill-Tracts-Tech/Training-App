import { Check } from "@mui/icons-material";
import { CourseModulesData } from "../../../Dammydata";
import TextUnderline from "../../../utils/textUnderline";

function CourseModules() {
  return (
    <div className="bg-base-200 py-10 mb-8">
      <div className="w-[85%] mx-auto">
        <div className="text-center mb-6">
          <div className="w-[300px] mx-auto">
            <h2 className="text-3xl bg-[#FF7810] text-white">COURSE DETAILS</h2>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl text-[#1C2045] my-5 font-bold">
              Advanced IT Diploma Course Module
            </h1>
            <TextUnderline custom_width={150} />
          </div>
          <div className="text-center text-[#1C2045] mt-5">
            <p>
              Here is the detailed module of what you will learn in the Advanced
              IT Diploma course of Learn computer Academy
            </p>
          </div>
        </div>
        <div>
          {CourseModulesData.map((module, i) => (
            <div
              className="bg-[#fff] px-8 py-11 mb-6 hover:scale-105 hover:shadow-md ease-in duration-300"
              key={i}
            >
              <h1 className="text-center text-2xl font-semibold">
                Module {i + 1} - {module?.title}
              </h1>
              <div className="flex justify-between  items-center">
                <img src={module?.icon} alt="" />
                <div className="flex-1">
                  <ul className="grid grid-cols-1 md:grid-cols-2 justify-between gap-y-4 gap-x-4 mt-6 ml-3">
                    {module?.lessons?.map((item, i) => (
                      <li key={i}>
                        {" "}
                        <Check
                          style={{ color: "#ff7810", fontSize: "22px" }}
                        />{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseModules;
