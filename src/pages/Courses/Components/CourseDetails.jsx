/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { useGetCoursesQuery } from "../../../redux/features/course/courseApi";
import { useState } from "react";
import Loader from "../../../components/Loader/Loader";

const CourseDetails = () => {
  const param = useParams();
  const { data, isLoading } = useGetCoursesQuery();

  const { catagory, id } = param;
  const cousreDetails = data?.data?.find((item) => item?._id === id);
  let newModule = [];
  if (isLoading) {
    <Loader type={""} />;
  }
  {
    newModule = JSON.parse(cousreDetails?.module);
  }

  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionToggle = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="w-[85%] mx-auto">
      {isLoading ? (
        <Loader type={""} />
      ) : (
        <>
          <div className=" lg:grid grid-cols-12  gap-5">
            <div className=" col-span-7">
              <img
                src={`${import.meta.env.VITE_APP_IMAGE_URL}/courses/${
                  cousreDetails?.image
                }`}
                alt=" cousreDetails.image"
                className=" rounded-lg w-full mx-auto lg:h-[60vh]"
              />
            </div>
            <div className=" col-span-5">
              <h1 className=" card-title lg:text-3xl">
                {cousreDetails?.title}
              </h1>
              <h1 className="text-md overflow-y-auto h-[256px] mt-4 scrollbar-thin scrollbar-thumb-cyan-400 scrollbar-track-gray-200 p-2">
                {cousreDetails?.desc}
              </h1>
              <div className=" ">
                {" "}
                <div className="bg-cyan-400 text-white py-4 border-2 text-xl w-full  rounded-md badge badge-outline">
                  Price: {cousreDetails.price} TK
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className=" flex justify-between">
              <h1 className=" card-title text-2xl">Course Curriculum:</h1>
              <div className="bg-cyan-400 text-white py-4 border-2 text-lg rounded-md badge badge-outline">
                Duration: {cousreDetails.duration}
              </div>
            </div>
            {newModule.map((module, index) => (
              <div key={index}>
                <div
                  className={`collapse collapse-plus bg-white shadow-md card-bordered rounded-md my-3 ${
                    openAccordion === index ? "open" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="my-accordion-3"
                    id={`accordion-${index}`}
                    checked={openAccordion === index}
                    onChange={() => handleAccordionToggle(index)}
                  />
                  <div
                    className="collapse-title text-md font-medium cursor-pointer"
                    onClick={() => handleAccordionToggle(index)}
                  >
                    {module.title}
                  </div>
                  <div className="collapse-content">
                    {openAccordion === index && <p>{module.desc}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CourseDetails;
