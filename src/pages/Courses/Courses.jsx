/* eslint-disable no-unused-vars */
import { Link, useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { useGetCoursesQuery } from "../../redux/features/course/courseApi";

function Courses() {
  const { category } = useParams();
  let courseType;

  if (category === "orion_computer_institute") {
    courseType = "1";
  } else if (category === "orion_selai_proshikhon_center") {
    courseType = "2";
  }

  const { data, isLoading } = useGetCoursesQuery(courseType);

  console.log(data, "courseData");
  return (
    <div className="w-[90%] mx-auto">
      {isLoading ? (
        <>
          <Loader type={"CourseList"} />
        </>
      ) : (
        <div className=" flex lg:flex-row flex-col items-center flex-wrap  justify-center  lg:gap-16">
          {data?.data.map((course, i) => (
            <div key={course._id}>
              <Link to={`/course/orion_computer_institute/${course._id}`}>
                <div className="mt-5 lg:mt-auto card card-compact w-80 bg-base-100 shadow-xl h-[410px]">
                  <figure className="transform-gpu overflow-hidden">
                    <img
                      src={`${import.meta.env.VITE_APP_IMAGE_URL}/courses/${
                        course.image
                      }`}
                      alt="Shoes"
                      className="transition-transform transform scale-100 hover:scale-110 ease-out duration-1000 w-full h-auto"
                    />
                  </figure>

                  <div className="card-body">
                    <h2 className="card-title">{course.title}</h2>
                    <p className="text-justify">
                      {course.desc.slice(0, 90)}...
                    </p>
                    <div className="card-actions justify-between">
                      <div className="bg-cyan-400 shadow text-white py-3 border-2 rounded-md badge badge-outline">
                        Duration: {course.duration}
                      </div>
                      <div className="bg-cyan-400 shadow text-white py-3 border-2  rounded-md badge badge-outline">
                        Price: {course.price}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Courses;
