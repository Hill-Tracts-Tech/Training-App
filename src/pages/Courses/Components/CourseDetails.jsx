/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-unused-vars */
import { Link, useParams } from "react-router-dom";
import { useGetCoursesQuery } from "../../../redux/features/course/courseApi";
import { useState } from "react";
import Loader from "../../../components/Loader/Loader";
import { ImageUrl } from "../../../utils/imageUrl";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
const CourseDetails = () => {
  const param = useParams();
  const { data, isLoading } = useGetCoursesQuery();
  const { catagory, id } = param;
  const cousreDetails = data?.data?.find((item) => item?._id === id);
  let newModule = [];
  if (isLoading) {
    <Loader type={"CourseDetails"} />;
  }
  {
    newModule = cousreDetails?.module && JSON?.parse(cousreDetails?.module);
  }
  const { image, designation, about, name } = cousreDetails?.instructor || {};

  return (
    <div className="w-[85%] mx-auto">
      {isLoading ? (
        <Loader type={"CourseDetails"} />
      ) : (
        <>
          <div className=" lg:grid grid-cols-12  gap-5">
            <div className=" col-span-7">
              <img
                src={`${import.meta.env.VITE_APP_IMAGE_URL}/courses/${
                  cousreDetails?.image
                }`}
                alt=" cousreDetails.image"
                className=" rounded-lg w-full mx-auto lg:h-[60vh] card-bordered"
              />
            </div>
            <div className=" col-span-5 h-[60vh]">
              <h1 className=" card-title lg:text-3xl h-[7vh]">
                {cousreDetails?.title}
              </h1>
              <h1 className="text-md h-[45vh] overflow-y-auto  mt-4 scrollbar-thin scrollbar-thumb-cyan-400 scrollbar-track-gray-200 p-2 text-justify">
                {cousreDetails?.desc}
              </h1>
              <div className="flex justify-between ">
                {" "}
                <div className=" shadow relative bottom-0 bg-cyan-400 text-white py-4 border-2 text-xl   rounded-md badge badge-outline">
                  Price: {cousreDetails.price} TK
                </div>
                <div className=" shadow my-2 lg:my-auto bg-cyan-400 text-white py-4 border-2 text-lg rounded-md badge badge-outline">
                  Duration: {cousreDetails.duration}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <div className=" lg:flex justify-between">
              <h1 className=" card-title lg:text-2xl">Course Curriculum :</h1>
              <Link
                to={"/registration"}
                className=" shadow hover:text-black my-2 lg:my-auto bg-cyan-400 text-white py-4 border-2 text-lg rounded-md badge badge-outline"
              >
                Enroll Now
              </Link>
            </div>
            {newModule.map((module, index) => (
              <div key={index}>
                <div
                  tabIndex={0}
                  className="my-3 collapse collapse-plus rounded-lg card-bordered bg-white shadow-md cursor-pointer"
                >
                  <div className="collapse-title text-md font-medium ">
                    {module.title}
                  </div>
                  <div className="collapse-content">
                    <p>{module.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h1 className="mt-20  card-title lg:text-2xl mb-3">
            Course Instructor :
          </h1>
          <div className=" card-bordered lg:p-4 px-2 py-3 rounded-md lg:flex justify-between items-center gap-6">
            <div className=" flex flex-col lg:flex-row text-center justify-between items-center gap-5">
              <div>
                <img
                  src={`${ImageUrl}/teachers/${image}`}
                  alt={name}
                  className="  lg:w-[290px] lg:h-[250px] w-[100px]  h-[100px] rounded-full border-2 border-cyan-400"
                />
              </div>
              <div>
                <h1 className="text-lg font-medium">{name}</h1>
                <h1 className=" text-base font-base text-gray-600">
                  {designation}
                </h1>
              </div>
            </div>
            <div className="border-r-2 lg:block hidden border-cyan-400 h-[40vh]"></div>
            <div className="mt-2 text-justify lg:w-[70%] flex justify-center gap-2">
              <FormatQuoteIcon className=" rotate-180" />
              <h1>{about}</h1>
              <div className=" flex justify-end items-end">
                <FormatQuoteIcon />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CourseDetails;
