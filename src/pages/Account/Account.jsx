import { useLocation } from "react-router-dom";
import img from "../../assets/img/student1.png";
// Fake data
import InfoIcon from "@mui/icons-material/Info";
import AppsOutageIcon from "@mui/icons-material/AppsOutage";
import PaymentsIcon from "@mui/icons-material/Payments";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { useState } from "react";

const UserAccount = () => {
  const [status, setStatus] = useState("PD");
  const handlerPD = () => {
    setStatus("PD");
  };
  const handlerCD = () => {
    setStatus("CD");
  };
  const handlerPH = () => {
    setStatus("PH");
  };

  const location = useLocation();
  const { state } = location;
  const studentData = state?.item;
  console.log(studentData);
  const infoArray = [
    { "Student Name": studentData.studentName },
    { Email: studentData.email },
    { "Student Id": studentData.studentId },
    { "Admission No": studentData.admissionNo },
    { "Phone Number": studentData.phoneNumber1 },
    { "Father Name": studentData.fatherName },
    { "Mother Name": studentData.motherName },
    { Nationality: studentData.nationality },
    { "NID No": studentData.nidNo },
    { "Present Address": studentData.presentAddress },
    { Religion: studentData.religion },
    { "Passport No": studentData.passportNo },
  ];
  const batchInfoArray = [
    { "Batch Name": studentData.batch?.batchName },
    { "Batch No": studentData.batch?.batchNo },
  ];

  return (
    <div>
      <div className="w-full md:w-[83%] mx-auto  p-4 lg:mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="lg:grid grid-cols-12 gap-2">
            <div className=" col-span-4 py-2 card-bordered  h-[43s%]  lg:h-[330px] lg:w-[15vw] shadow-lg  flex flex-col justify-start items-center rounded-xl">
              <div
                className="tooltip tooltip-open tooltip-top"
                data-tip={
                  studentData?.paymentStatus === "pending" ? "Draft" : "Clear"
                }
              ></div>
              <div className="text-center md:text-left mb-5">
                <img
                  src={img}
                  alt={img}
                  className="w-38 h-40 rounded-full border-gradient"
                />
              </div>
              <div
                onClick={handlerPD}
                className={`text-center flex justify-start    items-center gap-3 text-lg font-semibold px-3 ${
                  status === "PD" ? "text-orange-300 " : ""
                }hover:bg-orange-300  hover:text-white hover:border-l-4 hover:border-cyan-400  lg:w-[15vw] w-full py-1`}
              >
                <InfoIcon />
                <p>Personal Detail</p>
              </div>
              <div
                onClick={handlerCD}
                className={`text-center flex justify-start    items-center gap-3 text-lg font-semibold px-3 ${
                  status === "CD" ? "text-orange-300  " : ""
                }hover:bg-orange-300  hover:text-white hover:border-l-4 hover:border-cyan-400  lg:w-[15vw] w-full py-1 my-1`}
              >
                <AppsOutageIcon />
                <p> Course Detail</p>
              </div>
              <div
                onClick={handlerPH}
                className={`text-center flex justify-start    items-center gap-3 text-lg font-semibold px-3 ${
                  status === "PH" ? "text-orange-300  " : ""
                }hover:bg-orange-300  hover:text-white hover:border-l-4 hover:border-cyan-400  lg:w-[15vw] w-full py-1`}
              >
                <PaymentsIcon />
                <p>Payment History</p>
              </div>
            </div>
            <div className="lg:w-[63vw] w-full lg:ms-10 mt-5 lg:mt-0 card-bordered rounded-xl  col-span-8 shadow-lg px-6 py-4">
              {status === "PD" ? (
                // personal info..........................................
                <>
                  {" "}
                  <div className="flex justify-between">
                    <p className="text font-semibold text-xl text-cyan-400">
                      Information
                    </p>
                    <DriveFileRenameOutlineIcon className="text-cyan-400 hover:text-orange-400" />
                  </div>
                  <div className="mt-3 border border-t-[1px border-gray-300 border-dashed"></div>
                  <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-5 gap-3">
                    {infoArray.map((item, i) => (
                      <div key={i}>
                        <p className="text-md inline-block text-gray-400 font-semibold">
                          {Object.keys(item)[0]} :
                        </p>{" "}
                        <span className="text-xl font-semibold">
                          {item[Object.keys(item)[0]]}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-8">
                    <p className="text font-semibold text-xl text-cyan-400">
                      Batch
                    </p>
                  </div>
                  <div className="mt-3 border border-t-[1px border-gray-300 border-dashed"></div>
                  <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-5 gap-3">
                    {batchInfoArray.map((item, i) => (
                      <div key={i}>
                        <p className="text-md inline-block text-gray-400 font-semibold">
                          {Object.keys(item)[0]} :
                        </p>{" "}
                        <span className="text-xl font-semibold">
                          {item[Object.keys(item)[0]]}
                        </span>
                      </div>
                    ))}
                    <div>
                      <p className="text-md  text-gray-400 font-semibold">
                        About:
                      </p>{" "}
                      <span className="text-sm font-normal text-justify">
                        {studentData.batch?.about}
                      </span>
                    </div>
                  </div>
                </>
              ) : status === "CD" ? (
                // course section ...............................................
                <>
                  <div>
                    <div className="flex justify-between">
                      <p className="text font-semibold text-xl text-cyan-400">
                        Course Detail
                      </p>
                      <AppsOutageIcon className="text-cyan-400" />
                    </div>
                    <div className="mt-3 border border-t-[1px border-gray-300 border-dashed"></div>
                    <div className="grid lg:grid-cols-8 my-6 shadow-md rounded-md">
                      <div className=" col-span-4">
                        <img
                          src={`${import.meta.env.VITE_APP_IMAGE_URL}/courses/${
                            studentData.course.image
                          }`}
                          className=" rounded-md w-92 p-4"
                          alt={studentData.course.image}
                        />
                      </div>
                      <div className=" col-span-4">
                        <p className=" card-title text-2xl mb-5">
                          {studentData.course.title}
                        </p>
                        <p>{studentData.course.desc.slice(0, 200)}...</p>
                        <div className="flex justify-between me-4 my-6">
                          <p>
                            <span className="text-gray-500 font-semibold">
                              Duration:{" "}
                            </span>
                            {studentData.course.duration}
                          </p>
                          <p>
                            <span className="text-gray-500 font-semibold">
                              Price:{" "}
                            </span>
                            {studentData.course.price}
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                  </div>
                </>
              ) : (
                // payment setion.........................................
                <>
                  <div>
                    <div className="flex justify-between">
                      <p className="text font-semibold text-xl text-cyan-400">
                        Payment History
                      </p>
                      <PaymentsIcon className="text-cyan-400" />
                    </div>
                    <div className="mt-3 border border-t-[1px border-gray-300 border-dashed"></div>

                    <div className="flex justify-center lg:gap-56 gap-16 card-bordered p-4 shadow-lg rounded-lg mt-6 ">
                      <div>
                        <p className="text-md inline-block text-gray-400 font-semibold">
                          Course price:
                        </p>
                        <p>{studentData.course.price}</p>
                      </div>
                      <div>
                        <p className="text-md inline-block text-gray-400 font-semibold">
                          Payment Status:
                        </p>
                        <p>{studentData?.paymentStatus}</p>
                      </div>
                    </div>
                    <div className=" grid lg:grid-cols-2 grid-cols-1 gap-5 mt-6">
                      <div className=" card-bordered p-4 shadow-lg rounded-lg">
                        <p className="text-md  text-gray-400 font-semibold flex justify-between gap-44 items-center">
                          <span>Paid:</span>
                          <span>
                            <DriveFileRenameOutlineIcon className="text-cyan-400 hover:text-orange-400" />
                          </span>
                        </p>
                        <p>{studentData?.paid}</p>
                      </div>
                      <div className="card-bordered p-4 shadow-lg rounded-lg">
                        <p className="text-md inline-block text-gray-400 font-semibold">
                          Due:
                        </p>
                        <p>{studentData?.due}</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
