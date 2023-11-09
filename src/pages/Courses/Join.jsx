import TextUnderline from "../../utils/textUnderline";
import img from "../../assets/img/course.png";
import img2 from "../../assets/img/courses2.png";
import { AccessTimeFilled, Check, School } from "@mui/icons-material";
function JoinToday() {
  return (
    <div className="w-[85%] mx-auto px-4">
      <div className=" bg-[#FF7810] w-[210px] mx-auto">
        <h2 className="text-3xl text-center text-white">Join Today</h2>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-x-10">
        <div className="w-full md:w-[40%] my-9 grid grid-cols-1 md:grid-cols-2 gap-4">
          <img className="rounded-md" src={img} alt="" />
          <img className="rounded-md" src={img} alt="" />
          <img className="rounded-md" src={img2} alt="" />
          <img className="rounded-md" src={img} alt="" />
        </div>
        <div className="w-full md:w-[60%] px-8">
          <div>
            <h1 className="text-4xl text-[#1C2045] my-5 font-bold">
              Start Learning Graphics Design In Habra From Learn Computer
              Academy
            </h1>
            <TextUnderline custom_width={150} />
            <p className="my-5">
              Learn Computer Academy provides hands on training in Graphics
              Design. With the growing number of business going online, the
              demand of Graphics Designers are increasing daily. We teach
              Creative skills to our students.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 justify-between">
              <li>
                <Check style={{ color: "#FF7810", fontSize: "20px" }} />{" "}
                Industry expert Trainers
              </li>
              <li>
                <Check style={{ color: "#FF7810", fontSize: "20px" }} /> Live
                Project Based Training
              </li>
              <li>
                <Check style={{ color: "#FF7810", fontSize: "20px" }} /> 100%
                Job Assistance
              </li>
              <li>
                <Check style={{ color: "#FF7810", fontSize: "20px" }} />{" "}
                Students Portal
              </li>
              <li>
                <Check style={{ color: "#FF7810", fontSize: "20px" }} />{" "}
                Affordable Tuition Fees
              </li>
              <li>
                <Check style={{ color: "#FF7810", fontSize: "20px" }} /> Free
                Wi-Fi Facilities
              </li>
            </ul>
          </div>
          <div className="rounded-md shadow-md p-5 mb-4 mt-6">
            <div className="flex justify-between text-[#fff] bg-[#FF7810] px-6 py-5 font-bold">
              <div>
                <h2 className="mb-4">
                  <School
                    style={{
                      color: "#fff",
                      fontSize: "20px",
                      marginRight: "8px",
                    }}
                  />{" "}
                  Minimum Eligibility
                </h2>
                <h2>
                  {" "}
                  <AccessTimeFilled
                    style={{
                      color: "#fff",
                      fontSize: "20px",
                      marginRight: "8px",
                    }}
                  />
                  Course Duration
                </h2>
              </div>
              <div>
                <p className="mb-4"> Bachelors degree</p>
                <p>6 Months</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-2xl text-[#FF7810] font-semibold">
                Course Fees
              </span>{" "}
              <span className="text-3xl font-bold">
                BDT 1000/
                <span className="text-sm font-normal text-gray-500">Month</span>
              </span>
            </div>
            <button className="bg-blue-500 px-4 rounded-md shadow-md font-semibold text-xl mt-4 text-white py-2">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default JoinToday;
