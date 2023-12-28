/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import logo2 from "../../assets/icons/OCI.jpg";
import logo1 from "../../assets/icons/OSC.jpg";
import { useEffect, useState } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
const Registration = () => {
  const [active, setActive] = useState(true);
  const [image, setImage] = useState(null);
  const [uploadimg, setUpLoadimg] = useState(null);
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

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("prescription", uploadimg);
    console.log("Form data");
  };
  return (
    <div className="w-[85%] mx-auto mb-9">
      <div className="bg-white card-bordered shadow-lg px-2 font-semibold rounded-lg w-36 py-2">
        <p>Click The Icon</p>
      </div>
      <div className="lg:grid grid-cols-12 gap-2">
        <div className=" lg:col-span-2 w-[50%] lg:w-auto mb-2 lg:mb-auto hover:text-black  relative shadow-lg top-2 z p-2 px-4 bg-primary  cursor-pointer  bg-gradient-to-r from-blue-500 to-blue-500 rounded-md font-semibold text-white">
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
                <h1 className="text-2xl py-4 lg:py-auto font-semibold uppercase ">
                  Orion computer Institute
                </h1>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="hero lg:flex justify-start lg:my-16 my-10 ">
        <div className=" ">
          <div className=" card w-full  bg-base-100">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body ml-[-30px]"
            >
              <div className=" lg:flex justify-between">
                <div className="lg:flex block join mb-5 lg:mb-auto">
                  <button className=" uppercase btn join-item rounded-r-full lg:w-[188px]">
                    Admission No
                  </button>
                  <input
                    type="number"
                    className="input input-bordered join-item"
                    placeholder="Admission No"
                  />
                </div>
                <div className="btn py-2 px-2  text-center  text-black text-lg rounded-lg font-semibold">
                  <p>{formattedDate}</p>
                </div>
              </div>
              <div className="lg:flex justify-between">
                <div className="lg:mt-[200px] my-3 bg-gradient-to-r h-[100%] uppercase  line-clamp-4  from-blue-500  to-cyan-500  py-2 px-2 lg:w-[30vw] w-[85vw] text-center  text-white text-lg rounded-lg font-semibold">
                  Application Form for Admission
                </div>
                <div>
                  <div
                    className="lg:h-[30vh] h-[20vh] w-64  px-2 lg:px-auto border-2 border-dashed   border-gray-400 rounded-lg p-2 text-center"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                  >
                    {image ? (
                      <img
                        src={image}
                        alt="Uploaded"
                        className="   lg:h-[25vh] h-[30vh] w-[30vw] object-contain"
                      />
                    ) : (
                      <div>
                        <AddPhotoAlternateIcon style={{ fontSize: "150px" }} />
                      </div>
                    )}
                  </div>
                  <input
                    type="file"
                    id="imageInput"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={(e) => {
                      const file = e.target.files[0];
                      setUpLoadimg(file);
                      if (file && file.type.startsWith("image/")) {
                        const reader = new FileReader();
                        reader.onload = () => {
                          setImage(reader.result);
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                  <div className="mb-12">
                    <label
                      htmlFor="imageInput"
                      className=" relative top-9 p-2 px-4 bg-primary  cursor-pointer  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md font-semibold text-white"
                    >
                      Upload Image
                    </label>
                  </div>
                </div>
              </div>

              <div className="join">
                <button className="uppercase btn join-item rounded-r-full lg:w-[188px]">
                  Student Name
                </button>
                <input
                  type="text"
                  className="lg:w-[70vw] w-[55vw] input input-bordered join-item"
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
                  className="lg:w-[70vw] w-[55vw] input input-bordered join-item"
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
                  className="lg:w-[70vw] w-[43vw]  input input-bordered join-item"
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
                  className="lg:w-[70vw] w-[49vw] input input-bordered join-item"
                  placeholder="present address"
                  required
                  {...register("presentAddress", {
                    required: true,
                  })}
                />
              </div>
              <div className="lg:flex justify-between gap-2 ">
                <div className="join lg:mb-auto mb-3">
                  <button className="uppercase btn join-item rounded-r-full lg:w-[188px]">
                    Nationality:
                  </button>
                  <input
                    type="text"
                    className="lg:w-[28vw] w-[57vw] input input-bordered join-item"
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
                    className="lg:w-[28vw] w-[63vw] input input-bordered join-item"
                    placeholder="religion"
                    required
                    {...register("religion", {
                      required: true,
                    })}
                  />
                </div>
              </div>

              <div className="lg:flex justify-between gap-2">
                <div className="join">
                  <button className="uppercase btn join-item rounded-r-full lg:w-[188px]">
                    Call Number
                  </button>
                  <input
                    type="number"
                    className="lg:w-[28vw] w-[63vw] lg:mb-auto mb-3 input input-bordered join-item"
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
                    className="lg:w-[28vw] w-[63vw] input input-bordered join-item"
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
                  className="lg:w-[70vw] w-[44vw] input input-bordered join-item"
                  placeholder=" national id (if any)"
                  required
                  {...register(" nationalID ", {
                    required: true,
                  })}
                />
              </div>
              <div className="lg:flex justify-between gap-2">
                <div className="join">
                  <button className="uppercase btn join-item rounded-r-full lg:w-[188px]">
                    Passport No (If any):
                  </button>
                  <input
                    type="number"
                    className="lg:w-[28vw] w-[43vw] input input-bordered join-item"
                    placeholder="passport no"
                    required
                    {...register("passportNo", {
                      required: true,
                    })}
                  />
                </div>
                <div className="join lg:mt-auto mt-3">
                  <button className="uppercase btn join-item rounded-r-full lg:w-[188px]">
                    Date of Birth:
                  </button>
                  <input
                    type="date"
                    className="lg:w-[28vw] w-[63vw]  input input-bordered join-item"
                    placeholder="date of birth"
                    required
                    {...register("dateBirth", {
                      required: true,
                    })}
                  />
                </div>
              </div>
              <div className="lg:flex justify-between gap-2">
                <div className="join lg:mb-auto mb-2">
                  <button className=" uppercase btn join-item rounded-r-full lg:w-[188px]">
                    E-mail
                  </button>
                  <input
                    type="text"
                    className="lg:w-[28vw] w-[70vw] input input-bordered join-item"
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
                    className="select  select-bordered lg:w-[28vw] rounded-r-lg rounded-l-none "
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
                <button className="w-[86svw] lg:w-auto hover:text-black  relative shadow-lg top-2 z p-2 px-4 bg-primary  cursor-pointer  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md font-semibold text-white">
                  Registration
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
