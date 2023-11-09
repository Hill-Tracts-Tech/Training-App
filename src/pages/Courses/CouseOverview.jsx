import { CoursesOverview } from "../../Dammydata";
import TextUnderline from "../../utils/textUnderline";

function CourseOverview() {
  return (
    <div className="w-[85%] mx-auto px-4">
      {" "}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-4 my-7">
        <div className="md:pr-10">
          <div className="mb-4">
            <h2 className="text-3xl bg-[#FF7810] w-[250px] text-center text-white">
              Course Overview
            </h2>
            <h3 className="text-4xl text-[#1C2045] my-5 font-bold">
              What Will You Learn?
            </h3>
            <TextUnderline custom_width={150} />
            <p className="text-gray-600 mt-5">
              Basic Computer knowledge has become utmost important in our day-to
              day life today. With the rapid growth of internet we at Learn
              Computer Academy have taken a pledge to provide indepth knowledge
              in basics of computer to our students. Join today and get
              certified in Advanced IT Training.
            </p>
          </div>
        </div>
        {CoursesOverview.map((course, i) => (
          <div
            className="flex flex-col justify-center p-7 text-center hover:shadow-md hover:scale-105 ease-in duration-300"
            key={i}
          >
            <img
              className="w-[120px] h-[120px] mx-auto"
              src={course.icon}
              alt=""
            />
            <h3 className="text-xl font-semibold text-[#1C2045]">
              {course.title}
            </h3>
            <p className="text-gray-600">{course.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
export default CourseOverview;
