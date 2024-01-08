/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useGetCoursesQuery } from "../../redux/features/course/courseApi";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Loader from "../Loader/Loader";
const CourseSlider = () => {
  const { data: courseList, isLoading } = useGetCoursesQuery();

  return (
    <div>
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {courseList?.data.map((course, i) => (
              <div key={course._id}>
                <SwiperSlide>
                  <Link to={`/course/orion_computer_institute/${course._id}`}>
                    <div className="mt-5 lg:mt-auto card card-compact w-80 bg-base-100 shadow-xl h-[410px] card-bordered cursor-pointer">
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
                          <div className="bg-cyan-400  text-white py-3 border-2 rounded-md badge badge-outline">
                            Duration: {course.duration}
                          </div>
                          <div className="bg-cyan-400 text-white py-3 border-2  rounded-md badge badge-outline">
                            Price: {course.price}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        )}
      </>
    </div>
  );
};

export default CourseSlider;
