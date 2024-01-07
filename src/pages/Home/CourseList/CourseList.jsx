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
              Leaders In Website Training
            </h1>
            <TextUnderline custom_width={150} />
          </div>
          <div className="text-center text-white mt-5">
            <p></p>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-start mt-10">
          {courseList.map((data) => (
            <div className="overflow-hidden" key={data.id}>
              <div
                style={{ zIndex: "10" }}
                className="flex flex-col justify-center items-center py-10 px-8 bg-white rounded-md hover:scale-110 cursor-pointer transition-all ease-in duration-300"
                key={data.id}
              >
                <h1 className="text-justify text-3xl text-[#FF7810]">
                  {data.title}
                </h1>
                <img src={data.icon} alt="" />
                <div className="text-center my-4">
                  {" "}
                  <p className="text-4xl font-semibold text-gray-500 line-through">
                    ৳{data.basePrice}
                  </p>
                  <span className="text-3xl font-semibold">
                    ৳{data.discountPrice}
                    <span className="text-3xl text-gray-400">/Month</span>
                  </span>
                  <p>{data.fees}</p>
                </div>
                <div className="mb-5">
                  {data?.classes?.map((c, i) => (
                    <span key={i}>
                      {" "}
                      <DoneAll style={{ color: "#FF7810" }} /> {c}
                    </span>
                  ))}
                </div>
                <Link to={`course/${data.id}`}>
                  <button
                    style={{
                      background:
                        "linear-gradient(90deg,#009688 0%,#2196F3 100%)",
                      color: "#fff",
                    }}
                    className="px-6 py-2 rounded-md"
                  >
                    Course Details
                  </button>
                </Link>
              </div>
              <div className="relative">
                <RoundAnimation />
              </div>
            </div>
          ))}
        </div> */}
        <CourseSlider />
      </div>
    </div>
  );
}
export default CourseList;
