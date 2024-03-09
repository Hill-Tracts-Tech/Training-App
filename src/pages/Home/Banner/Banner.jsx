import "./Banner.css";
import OCI1 from "../../../assets/img/OCI1.jpg";
import logo from "../../../assets/icons/OCI.jpg";
import "./Banner.css";
import { Link } from "react-router-dom";
import TextUnderline from "../../../utils/textUnderline";
import { parm } from "../../../Dammydata";
function Banner() {
  return (
    <div className="bg-transparent">
      <div className="w-[85%] mx-auto lg:p-4 p-2 flex flex-wrap items-center justify-start lg:gap-6">
        <div className="w-full md:w-1/2">
          <div className="my-5">
            <h2 className="text-3xl bg-[#FF7810] w-[120px] rounded-md p-1 text-center text-white">
              We Are
            </h2>
            <h1 className="text-4xl text-blue-600 my-5 font-bold">
              ORION COMPUTER INSTITUTE
            </h1>
            <TextUnderline custom_width={150} />
          </div>
          <div className="my-4">
            {" "}
            <p className="lg:w-[450px] text-justify lg:text-lg">
              {parm.slice(0, 400)}...
              <br />
              <p className="mt-3 text-xl font-semibold">Respectful</p>
              <p className="">Engineer Md. Shaiful Islam</p>
              <p className=""> M.Sc in Computer Science & Engineering.</p>
              <p className="text-blue-600 font-semibold">
                Chief Director <br /> Orion Computer Institute (OCI)
              </p>
            </p>
          </div>
          <Link
            to="/about"
            className="px-5 py-2 bg-blue-500 rounded-md outline-none border-none transition duration-300 ease-in-out text-white"
          >
            Know More
          </Link>
        </div>
        <div className="bg-shape mt-10 lg:mt-auto md:mt-auto flex justify-center bounce">
          <img src={OCI1} alt="Banner" className="w-full h-[75%] rounded-xl" />
          <img
            src={logo}
            alt="Banner"
            className="h-[35%] hidden lg:block rounded-full z-50 mt-[-30px] ms-[-80px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
