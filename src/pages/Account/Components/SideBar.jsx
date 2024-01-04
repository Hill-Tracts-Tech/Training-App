/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import img from "../../../assets/img/student1.png";
// Fake data
import InfoIcon from "@mui/icons-material/Info";
import AppsOutageIcon from "@mui/icons-material/AppsOutage";
import PaymentsIcon from "@mui/icons-material/Payments";

import { ImageUrl } from "../../../utils/imageUrl";
const SideBar = ({ studentData, setStatus, status }) => {
  const handlerPD = () => {
    setStatus("PD");
  };
  const handlerCD = () => {
    setStatus("CD");
  };
  const handlerPH = () => {
    setStatus("PH");
  };
  return (
    <div className=" col-span-4 py-2 card-bordered  h-[43s%]  lg:h-[330px] lg:w-[15vw] shadow-lg  flex flex-col justify-start items-center rounded-xl">
      <div
        className="tooltip tooltip-open tooltip-top"
        data-tip={
          studentData?.registrationStatus === "pending" ? "Draft" : "Paid"
        }
      ></div>
      <div className="text-center md:text-left mb-5 border-[3px] border-cyan-400 rounded-full">
        <img
          src={`${ImageUrl}/students/${studentData?.image}` || img}
          alt={img}
          className="w-36 h-34 rounded-full border-gradient"
        />
      </div>
      <div
        onClick={handlerPD}
        className={`text-center flex justify-start cursor-pointer items-center gap-3 text-lg font-semibold px-3 ${
          status === "PD" ? "text-orange-300 " : ""
        }hover:bg-orange-300  hover:text-white hover:border-l-4 hover:border-cyan-400  lg:w-[15vw] w-full py-1`}
      >
        <InfoIcon />
        <p>Personal Detail</p>
      </div>
      <div
        onClick={handlerCD}
        className={`text-center flex justify-start cursor-pointer items-center gap-3 text-lg font-semibold px-3 ${
          status === "CD" ? "text-orange-300  " : ""
        }hover:bg-orange-300  hover:text-white hover:border-l-4 hover:border-cyan-400  lg:w-[15vw] w-full py-1 my-1`}
      >
        <AppsOutageIcon />
        <p> Course Detail</p>
      </div>
      <div
        onClick={handlerPH}
        className={`text-center flex justify-start cursor-pointer items-center gap-3 text-lg font-semibold px-3 ${
          status === "PH" ? "text-orange-300  " : ""
        }hover:bg-orange-300  hover:text-white hover:border-l-4 hover:border-cyan-400  lg:w-[15vw] w-full py-1`}
      >
        <PaymentsIcon />
        <p>Payment History</p>
      </div>
    </div>
  );
};

export default SideBar;
