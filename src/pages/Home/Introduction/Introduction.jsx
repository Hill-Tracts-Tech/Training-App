import img from "../../../assets/img/OSPI1.jpg";
import logo from "../../../assets/icons/OSC.jpg";
import TextUnderline from "../../../utils/textUnderline";
import "./Introduction.css";
import { parm1 } from "../../../Dammydata";
function Introduction() {
  return (
    <div className="bg-pattern ">
      <div className="w-[85%] mx-auto ">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className=" mt-8 bounce">
            <img src={img} alt="Banner" className="w-full rounded-xl " />
          </div>
          <div className="w-full md:w-1/2 ">
            <h2 className=" text-3xl bg-[#FF7810] w-[120px] rounded-md p-1 text-center text-white">
              We Are
            </h2>
            <img src={logo} alt="Banner" className="h-28 mt-8" />
            <div className="">
              <h1 className="lg:text-4xl text-xl text-blue-600 my-5 font-bold">
                ORION SELAI PROSHIKHON CENTER
              </h1>
              <TextUnderline custom_width={150} />
              <p className="mt-5 text-justify lg:text-lg">
                {parm1.slice(0, 400)}...
              </p>
              <br />
              <p className=" mt-1 text-justify lg:text-lg">
                <p className=" text-xl font-semibold ">Respectful</p>
                <p className="">Engineer Iti Ara Khatun. </p>
                <p className="">
                  {" "}
                  Diploma Engineer in Civil Technology & <br />
                  M.Sc. in Social Science.
                </p>
                <p className="text-blue-600 font-semibold">
                  Chief Director
                  <br />
                  Orion Selai Proshikhon Centre (OSPC)
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Introduction;
