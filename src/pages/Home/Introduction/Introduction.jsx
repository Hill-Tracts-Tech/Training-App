import img from "../../../assets/img/OSPI1.jpg";
import logo from "../../../assets/icons/OSC.jpg";
import TextUnderline from "../../../utils/textUnderline";
import "./Introduction.css";
import { parm1 } from "../../../Dammydata";
function Introduction() {
  return (
    <div className="bg-pattern lg:p-9">
      <div className="w-[85%] mx-auto lg:px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-x-10">
          <div className="w-full md:w-[40%] my-9 bounce">
            <img
              src={logo}
              alt="Banner"
              className="bg-white p-2 fixed w-[35%] hidden lg:flex rounded-full z-[999] mt-[-50px] ms-[-70px]"
            />
            <img src={img} alt="Banner" className="w-full rounded-xl " />
          </div>
          <div className="w-full md:w-[60%] lg:px-8">
            <h2 className="lg:ms-[-30px] text-3xl bg-[#FF7810] w-[120px] rounded-md p-1 text-center text-white">
              We Are
            </h2>
            <div className="lg:ms-[-30px]">
              <h1 className="text-4xl text-blue-600 my-5 font-bold">
                ORION SELAI PROSHIKHON CENTER
              </h1>
              <TextUnderline custom_width={150} />
              <p className="mt-5 text-justify lg:text-lg lg:w-[468px]">
                {parm1.slice(0, 400)}...
              </p>
              <br />
              <p className=" mt-3 text-justify lg:text-lg">
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
              {/* <div className="flex justify-start gap-x-3">
                <span>
                  <Check
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: "#FF7810",
                      color: "white",
                      marginBottom: "10px",
                    }}
                  />
                </span>
                <span>Creative Graphics Design and Photoshop training</span>
              </div>
              <div className="flex justify-start gap-x-3">
                <span>
                  <Check
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: "#FF7810",
                      color: "white",
                      marginBottom: "10px",
                    }}
                  />
                </span>
                <span>Website design and Development Training</span>
              </div>
              <div className="flex justify-start gap-x-3">
                <span>
                  <Check
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: "#FF7810",
                      color: "white",
                      marginBottom: "10px",
                    }}
                  />
                </span>
                <span>Special classes of computer fundamentals</span>
              </div>
              <div className="flex flex-wrap justify-between items-center mt-6 shadow-md py-4 px-2">
                <div className="flex items-center">
                  <NetworkPing
                    style={{ width: "80px", height: "80px", color: "#ff7810" }}
                  />
                  <div>
                    <p className="text-5xl font-semibold text-[#e49245]">
                      1579
                    </p>
                    <p className="text-xl">Students Work</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <AccessTime
                    style={{ width: "80px", height: "80px", color: "#ff7810" }}
                  />
                  <div>
                    <p className="text-5xl font-semibold text-[#e49245]">
                      3498
                    </p>
                    <p className="text-xl">Hour Training</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Introduction;
