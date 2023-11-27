/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import logo2 from "../../assets/icons/OCI.jpg";
import logo1 from "../../assets/icons/OSC.jpg";
import { useEffect, useState } from "react";
const Registration = () => {
  const [active, setActive] = useState(true);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  const handleState = (type) => {
    const delay = 500;
    console.log(type);

    setTimeout(() => {
      if (type === "OCI") {
        setActive(false);
      } else {
        setActive(true);
      }
    }, delay);
  };
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every 1000 milliseconds (1 second)

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures that useEffect runs only once when the component mounts

  const formattedDate = currentDate.toDateString();
  return (
    <div className="w-[85%] mx-auto mb-9">
      <div className="bg-white card-bordered shadow-lg px-2 font-semibold rounded-lg w-36 py-2">
        <p>Click The Icon</p>
      </div>
      <div className="grid grid-cols-12 gap-2">
        <div className=" col-span-2  hover:text-black  relative shadow-lg top-2 z p-2 px-4 bg-primary  cursor-pointer  bg-gradient-to-r from-blue-500 to-blue-500 rounded-md font-semibold text-white">
          <div className=" grid grid-cols-2 gap-3">
            {active ? (
              <>
                <img
                  onClick={() => handleState("OCI")}
                  className="h-12 duration-1000 shadow-xl rounded-full"
                  src={logo1}
                />
                <div></div>
              </>
            ) : (
              <>
                <div></div>
                <img
                  onClick={() => handleState("OSP")}
                  className="h-12 duration-1000   shadow-xl  rounded-full"
                  src={logo2}
                />
              </>
            )}
          </div>
        </div>
        <div className=" col-span-10 flex items-center justify-center  hover:text-black  relative shadow-lg top-2  bg-primary  cursor-pointer  bg-gradient-to-r  from-blue-500  to-cyan-500 rounded-md font-semibold text-white">
          <div className=" text-center ">
            {active ? (
              <>
                <h1 className="text-2xl font-semibold uppercase ">
                  Orion Selai Proshikhon center
                </h1>
              </>
            ) : (
              <>
                <h1 className="text-2xl font-semibold uppercase ">
                  Orion computer Institute
                </h1>
              </>
            )}
          </div>
        </div>
      </div>
      {active ? (
        <div className="hero flex justify-start lg:my-16 my-10 ">
          <div className=" ">
            <div className=" card w-full  bg-base-100">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="card-body ml-[-30px]"
              >
                <div className=" flex justify-between">
                  <div className="join">
                    <button className=" uppercase btn join-item rounded-r-full lg:w-[188px]">
                      Admission No
                    </button>
                    <input
                      type="number"
                      className="input input-bordered join-item"
                      placeholder="Admission No"
                    />
                  </div>
                  <div className="bg-gradient-to-r from-blue-500  to-cyan-500  py-2 px-2  text-center  text-white text-lg rounded-lg font-semibold">
                    <p>{formattedDate}</p>
                  </div>
                </div>

                <div className=" my-3 bg-gradient-to-r uppercase  line-clamp-4  from-blue-500  to-cyan-500  py-2 px-2 lg:w-[30vw] text-center  text-white text-lg rounded-lg font-semibold">
                  Application Form for Admission
                </div>

                <div className="join">
                  <button className="uppercase btn join-item rounded-r-full lg:w-[188px]">
                    Student Name
                  </button>
                  <input
                    type="text"
                    className="lg:w-[70vw]  input input-bordered join-item"
                    placeholder="Student Name"
                    required
                    {...register("name", {
                      required: true,
                    })}
                  />
                </div>

                <div className="join">
                  <button className="uppercase btn join-item rounded-r-full lg:w-[188px]">
                    Father's Name
                  </button>
                  <input
                    type="text"
                    className="lg:w-[70vw]  input input-bordered join-item"
                    placeholder="father's Name"
                    required
                    {...register("fatherName", {
                      required: true,
                    })}
                  />
                </div>
                <div className="join">
                  <button className="uppercase btn join-item rounded-r-full lg:w-[188px]">
                    Mother's Name
                  </button>
                  <input
                    type="text"
                    className="lg:w-[70vw]  input input-bordered join-item"
                    placeholder="mother's Name"
                    required
                    {...register("motherName", {
                      required: true,
                    })}
                  />
                </div>
                <div className="join">
                  <button className="uppercase btn join-item rounded-r-full lg:w-[188px]">
                    Permanent Address:
                  </button>
                  <input
                    type="text"
                    className="lg:w-[70vw]  input input-bordered join-item"
                    placeholder="permanent address"
                    required
                    {...register("permanentAddress", {
                      required: true,
                    })}
                  />
                </div>
                <div className="join">
                  <button className="uppercase btn join-item rounded-r-full lg:w-[188px]">
                    Present Address:
                  </button>
                  <input
                    type="text"
                    className="lg:w-[70vw]  input input-bordered join-item"
                    placeholder="present address"
                    required
                    {...register("presentAddress", {
                      required: true,
                    })}
                  />
                </div>
                <div className="flex justify-between gap-2">
                  <div className="join">
                    <button className="uppercase btn join-item rounded-r-full lg:w-[188px]">
                      Nationality:
                    </button>
                    <input
                      type="text"
                      className="lg:w-[28vw]  input input-bordered join-item"
                      placeholder="nationality"
                      required
                      {...register("nationality", {
                        required: true,
                      })}
                    />
                  </div>
                  <div className="join">
                    <button className="uppercase btn join-item rounded-r-full lg:w-[188px]">
                      Religion:
                    </button>
                    <input
                      type="text"
                      className="lg:w-[28vw]  input input-bordered join-item"
                      placeholder="religion"
                      required
                      {...register("religion", {
                        required: true,
                      })}
                    />
                  </div>
                </div>

                <div className="flex justify-between gap-2">
                  <div className="join">
                    <button className="uppercase btn join-item rounded-r-full lg:w-[188px]">
                      Call Number
                    </button>
                    <input
                      type="number"
                      className="lg:w-[28vw]  input input-bordered join-item"
                      placeholder="call"
                      required
                      {...register("callNumber", {
                        required: true,
                      })}
                    />
                  </div>
                  <div className="join">
                    <button className="uppercase btn join-item rounded-r-full lg:w-[188px]">
                      Another Call
                    </button>
                    <input
                      type="number"
                      className="lg:w-[28vw]  input input-bordered join-item"
                      placeholder="another call"
                      required
                      {...register("anotherCallNumber", {
                        required: true,
                      })}
                    />
                  </div>
                </div>
                <div className="join">
                  <button className="uppercase btn join-item rounded-r-full lg:w-[190px]">
                    National ID (If any):
                  </button>
                  <input
                    type="text"
                    className="lg:w-[70vw]  input input-bordered join-item"
                    placeholder=" national id (if any)"
                    required
                    {...register(" nationalID ", {
                      required: true,
                    })}
                  />
                </div>
                <div className="flex justify-between gap-2">
                  <div className="join">
                    <button className="uppercase btn join-item rounded-r-full lg:w-[188px]">
                      Passport No (If any):
                    </button>
                    <input
                      type="number"
                      className="lg:w-[28vw]  input input-bordered join-item"
                      placeholder="passport no"
                      required
                      {...register("passportNo", {
                        required: true,
                      })}
                    />
                  </div>
                  <div className="join">
                    <button className="uppercase btn join-item rounded-r-full lg:w-[188px]">
                      Date of Birth:
                    </button>
                    <input
                      type="date"
                      className="lg:w-[28vw]  input input-bordered join-item"
                      placeholder="date of birth"
                      required
                      {...register("dateBirth", {
                        required: true,
                      })}
                    />
                  </div>
                </div>
                <div className="flex justify-between gap-2">
                  <div className="join">
                    <button className=" uppercase btn join-item rounded-r-full lg:w-[188px]">
                      E-mail
                    </button>
                    <input
                      type="text"
                      className="lg:w-[28vw]  input input-bordered join-item"
                      placeholder="e-mail"
                      required
                      {...register("email", {
                        required: true,
                      })}
                    />
                  </div>
                  <div className="join">
                    <button className="uppercase btn join-item  lg:w-[188px]">
                      Gender
                    </button>
                    <select
                      {...register("course_Name", { required: true })}
                      aria-invalid={errors.from ? "true" : "false"}
                      className="select select-bordered lg:w-[28vw] rounded-r-lg rounded-l-none "
                    >
                      <option selected disabled value="MS office">
                        Select gender
                      </option>
                      <option value="MS office">Male</option>
                      <option value="Database Programming">Female</option>
                    </select>
                  </div>
                </div>
                {/* <h1 className=" text-lg mb-[-12px] mt-5 font-semibold">
                  Education Details:
                </h1>
                <div className="flex justify-between">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Degree Title</span>
                    </label>
                    <select
                      {...register("course_Name", { required: true })}
                      aria-invalid={errors.from ? "true" : "false"}
                      className="select select-bordered lg:w-[240px]"
                    >
                      <option selected disabled value="MS office">
                        Select Degree
                      </option>
                      <option value="MS office">SSC</option>
                      <option value="Database Programming">HSC</option>
                      <option value="Grapgics Design<">Honours</option>
                    </select>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Department</span>
                    </label>
                    <input
                      type="text"
                      placeholder="department"
                      className="input input-bordered lg:w-[240px]"
                      required
                    />
                  </div>
                </div>
                <div className=" flex justify-between">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">CGPA</span>
                    </label>
                    <input
                      type="number"
                      placeholder="CGPA"
                      className="input input-bordered lg:w-[240px]"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Passing Year</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Passing Year"
                      className="input input-bordered lg:w-[240px]"
                      required
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Institute Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="institute name"
                    className="input input-bordered "
                    required
                  />
                </div>
                <h1 className=" text-lg mb-[-12px] mt-5 font-semibold">
                  Course Details:
                </h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Course Name</span>
                  </label>
                  <select
                    {...register("course_Name", { required: true })}
                    aria-invalid={errors.from ? "true" : "false"}
                    className="select select-bordered "
                  >
                    <option selected disabled value="MS office">
                      Select Course
                    </option>
                    <option value="MS office">MS office</option>
                    <option value="Database Programming">
                      Database Programming
                    </option>
                    <option value="Grapgics Design<">Grapgics Design</option>
                  </select>
                </div>
                <div className="flex justify-between">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Course Duration</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Course Duration"
                      className="input input-bordered lg:w-[240px]"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input
                      type="price"
                      placeholder="number"
                      className="input input-bordered lg:w-[240px]"
                      required
                    />
                  </div>
                </div> */}

                <div className="form-control mt-6">
                  <button className=" hover:text-black  relative shadow-lg top-2 z p-2 px-4 bg-primary  cursor-pointer  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md font-semibold text-white">
                    Registration
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="hero flex justify-start lg:my-16 my-10 ">
          <div className=" ">
            <div className=" card w-full  bg-base-100">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="card-body ml-[-30px]"
              >
                <div className=" flex justify-between">
                  <div className="join">
                    <button className=" uppercase btn join-item rounded-r-full lg:w-[188px]">
                      Admission No
                    </button>
                    <input
                      type="number"
                      className="input input-bordered join-item"
                      placeholder="Admission No"
                    />
                  </div>
                  <div className="bg-gradient-to-r from-blue-500  to-cyan-500  py-2 px-2  text-center  text-white text-lg rounded-lg font-semibold">
                    <p>{formattedDate}</p>
                  </div>
                </div>
                <div className=" my-3 bg-gradient-to-r uppercase  line-clamp-4  from-blue-500  to-cyan-500  py-2 px-2 lg:w-[30vw] text-center  text-white text-lg rounded-lg font-semibold">
                  Application Form for Admission
                </div>

                <div className="join">
                  <button className="uppercase btn join-item rounded-r-full lg:w-[188px]">
                    Student Name
                  </button>
                  <input
                    type="text"
                    className="lg:w-[70vw]  input input-bordered join-item"
                    placeholder="Student Name"
                    required
                    {...register("name", {
                      required: true,
                    })}
                  />
                </div>

                <div className="join">
                  <button className="uppercase btn join-item rounded-r-full lg:w-[188px]">
                    Father's Name
                  </button>
                  <input
                    type="text"
                    className="lg:w-[70vw]  input input-bordered join-item"
                    placeholder="father's Name"
                    required
                    {...register("fatherName", {
                      required: true,
                    })}
                  />
                </div>
                <div className="join">
                  <button className="uppercase btn join-item rounded-r-full lg:w-[188px]">
                    Mother's Name
                  </button>
                  <input
                    type="text"
                    className="lg:w-[70vw]  input input-bordered join-item"
                    placeholder="mother's Name"
                    required
                    {...register("motherName", {
                      required: true,
                    })}
                  />
                </div>
                <div className="join">
                  <button className="uppercase btn join-item rounded-r-full lg:w-[188px]">
                    Permanent Address
                  </button>
                  <input
                    type="text"
                    className="lg:w-[70vw]  input input-bordered join-item"
                    placeholder="permanent address"
                    required
                    {...register("permanentAddress", {
                      required: true,
                    })}
                  />
                </div>
                <div className="join">
                  <button className="uppercase btn join-item rounded-r-full lg:w-[188px]">
                    Present Address
                  </button>
                  <input
                    type="text"
                    className="lg:w-[70vw]  input input-bordered join-item"
                    placeholder="present address"
                    required
                    {...register("presentAddress", {
                      required: true,
                    })}
                  />
                </div>
                <div className="flex justify-between gap-2">
                  <div className="join">
                    <button className="uppercase btn join-item rounded-r-full lg:w-[188px]">
                      Nationality
                    </button>
                    <input
                      type="text"
                      className="lg:w-[28vw]  input input-bordered join-item"
                      placeholder="nationality"
                      required
                      {...register("nationality", {
                        required: true,
                      })}
                    />
                  </div>
                  <div className="join">
                    <button className="uppercase btn join-item rounded-r-full lg:w-[188px]">
                      Religion
                    </button>
                    <input
                      type="text"
                      className="lg:w-[28vw]  input input-bordered join-item"
                      placeholder="religion"
                      required
                      {...register("religion", {
                        required: true,
                      })}
                    />
                  </div>
                </div>

                <div className="flex justify-between gap-2">
                  <div className="join">
                    <button className="uppercase btn join-item rounded-r-full lg:w-[188px]">
                      Education Qualification
                    </button>
                    <input
                      type="text"
                      className="lg:w-[28vw]  input input-bordered join-item"
                      placeholder="education qualification"
                      required
                      {...register("educationQual", {
                        required: true,
                      })}
                    />
                  </div>
                  <div className="join">
                    <button className="uppercase btn join-item rounded-r-full lg:w-[188px]">
                      GPA
                    </button>
                    <input
                      type="number"
                      className="lg:w-[28vw]  input input-bordered join-item"
                      placeholder="GPA"
                      required
                      {...register("GPA", {
                        required: true,
                      })}
                    />
                  </div>
                </div>
                <div className="flex justify-between gap-2">
                  <div className="join">
                    <button className="uppercase btn join-item rounded-r-full lg:w-[188px]">
                      Call Number
                    </button>
                    <input
                      type="number"
                      className="lg:w-[28vw]  input input-bordered join-item"
                      placeholder="call"
                      required
                      {...register("callNumber", {
                        required: true,
                      })}
                    />
                  </div>
                  <div className="join">
                    <button className="uppercase btn join-item rounded-r-full lg:w-[188px]">
                      Another Call
                    </button>
                    <input
                      type="number"
                      className="lg:w-[28vw]  input input-bordered join-item"
                      placeholder="another call"
                      required
                      {...register("anotherCallNumber", {
                        required: true,
                      })}
                    />
                  </div>
                </div>
                <div className="join">
                  <button className="uppercase btn join-item rounded-r-full lg:w-[190px]">
                    National ID (If any)
                  </button>
                  <input
                    type="text"
                    className="lg:w-[70vw]  input input-bordered join-item"
                    placeholder=" national id (if any)"
                    required
                    {...register(" nationalID ", {
                      required: true,
                    })}
                  />
                </div>
                <div className="flex justify-between gap-2">
                  <div className="join">
                    <button className="uppercase btn join-item rounded-r-full lg:w-[188px]">
                      Passport No (If any)
                    </button>
                    <input
                      type="number"
                      className="lg:w-[28vw]  input input-bordered join-item"
                      placeholder="passport no"
                      required
                      {...register("passportNo", {
                        required: true,
                      })}
                    />
                  </div>
                  <div className="join">
                    <button className="uppercase btn join-item rounded-r-full lg:w-[188px]">
                      Date of Birth
                    </button>
                    <input
                      type="date"
                      className="lg:w-[28vw]  input input-bordered join-item"
                      placeholder="date of birth"
                      required
                      {...register("dateBirth", {
                        required: true,
                      })}
                    />
                  </div>
                </div>
                <div className="flex justify-between gap-2">
                  <div className="join">
                    <button className=" uppercase btn join-item rounded-r-full lg:w-[188px]">
                      E-mail
                    </button>
                    <input
                      type="text"
                      className="lg:w-[28vw]  input input-bordered join-item"
                      placeholder="e-mail"
                      required
                      {...register("email", {
                        required: true,
                      })}
                    />
                  </div>
                  <div className="join">
                    <button className="uppercase btn join-item  lg:w-[188px]">
                      Gender
                    </button>
                    <select
                      {...register("course_Name", { required: true })}
                      aria-invalid={errors.from ? "true" : "false"}
                      className="select select-bordered lg:w-[28vw] rounded-r-lg rounded-l-none "
                    >
                      <option selected disabled value="MS office">
                        Select gender
                      </option>
                      <option value="MS office">Male</option>
                      <option value="Database Programming">Female</option>
                    </select>
                  </div>
                </div>

                <div className="form-control mt-6">
                  <button className=" hover:text-black  relative shadow-lg top-2 z p-2 px-4 bg-primary  cursor-pointer  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md font-semibold text-white">
                    Registration
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Registration;
