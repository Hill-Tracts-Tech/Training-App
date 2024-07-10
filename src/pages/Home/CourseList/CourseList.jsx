import center from "../../../assets/img/center.jpg";
import TextUnderline from "../../../utils/textUnderline";

import CourseSlider from "../../../components/Slider/CourseSlider";

function CourseList() {
  return (
    <div
      className="mt-6 py-10"
      style={{
        background: `linear-gradient(rgba(71, 142, 200, 0.751), rgba(71, 142, 200, 0.751)), url(${center})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100vw",
      }}
    >
      <div className="w-[85%] mx-auto">
        <div className="text-center">
          <div className="w-[300px] mx-auto">
            <h2 className="text-3xl bg-[#FF7810] text-white">FEES CHART</h2>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl text-white my-5 font-bold">
              Our Unique Factors Makes Us <br />
              Leaders In Our Institute
            </h1>
            <TextUnderline custom_width={150} />
          </div>
          <div className="text-center text-white mt-5">
            <p></p>
          </div>
        </div>
        <CourseSlider />
      </div>
    </div>
  );
}
export default CourseList;
