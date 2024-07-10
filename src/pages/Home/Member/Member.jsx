/* eslint-disable no-unused-vars */
import React from "react";
import Man1 from "../../../assets/img/Man1.jpg";
import Man2 from "../../../assets/img/Man2.png";
import Man3 from "../../../assets/img/Man3.jpg";
import WM1 from "../../../assets/img/women1.jpg";
import WM2 from "../../../assets/img/women2.jpg";
import WM3 from "../../../assets/img/women3.jpg";
const Member = () => {
  return (
    <div className="my-10">
      <h1 className="text-center text-2xl mb-4 bg-blue-400 text-white font-semibold py-2 w-[320px] rounded-md  mx-auto">
        Member of Board
      </h1>
      <div className="w-[85%] lg:grid grid-cols-4 justify-centers  items-center mx-auto gap-10">
        <div className="">
          {/* <h1 className="mt-12 uppercase rounded border-2 mb-2 font-bold border-orange-300 bg-[#FF7810] text-white h-10 flex justify-center items-center">
          
          </h1> */}
          <div className="shadow-lg p-1">
            <img
              src={Man1}
              alt=""
              className=" h-64 w-full rounded border-[1px] border-black"
            />
            <p className="text-lg my-2 font-semibold">
              Engineer Md. Ishaque.
              <br /> <span className="text-blue-500">Chairmen</span>
              <br />
              Orion Computer Institute
            </p>
          </div>
        </div>
        <div className="">
          <div className="shadow-lg p-1 my-10 lg:my-auto">
            <img
              src={WM1}
              alt=""
              className="h-64 w-full rounded border-[1px] border-black"
            />
            <p className="text-lg my-2 font-semibold">
              Mrs. Sanju Ara Begum.
              <br />
              <span className="text-blue-500"> Senior Member</span>
              <br />
              Orion Computer Institute
            </p>
          </div>
        </div>
        <div className="">
          <div className="shadow-lg p-1 ">
            <img
              src={WM2}
              alt=""
              className="h-64 w-full rounded border-[1px] border-black"
            />
            <p className="text-lg my-2 font-semibold">
              Engineer Iti Ara Khatun.
              <br />
              <span className="text-blue-500"> Managing Director</span>
              <br />
              <span className="text-md">Orion Selai Proshikhon Centre</span>
            </p>
          </div>
        </div>

        <div className="shadow-lg p-1 mt-10 lg:mt-auto">
          <img src={Man2} alt="" className="h-64 w-full rounded " />
          <p className="text-lg my-2 font-semibold">
            Engineer Md. Shaiful Islam
            <br />
            <span className="text-blue-500"> Secretary</span>
            <br /> Orion Computer Institute
          </p>
        </div>

        {/* <!-- Second Row --> */}
      </div>
      <div className="w-[85%] mx-auto lg:flex justify-center mt-10 gap-10">
        <div className="shadow-lg p-1 ">
          <img
            src={Man3}
            alt=""
            className="h-64 lg:w-[250px] w-full rounded border-[1px] border-black"
          />
          <p className="text-lg my-2 font-semibold">
            Advocate <br />
            Farhad Hussain Bhuiyan
            <br />
            <span className="text-blue-500"> Legal Adviser</span>
            <br /> Orion Computer Institute
          </p>
        </div>
        <div className="shadow-lg p-1 mt-10 lg:mt-0">
          <img
            src={WM3}
            alt=""
            className="h-64 w-full rounded border-[1px] border-black"
          />
          <p className="text-lg my-2 font-semibold">
            Ismot Ara Begum
            <br />
            <span className="text-blue-500"> Director </span>
            <br /> Department Of Caregiver
          </p>
        </div>
      </div>
    </div>
  );
};

export default Member;
