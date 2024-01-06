import { joinSteps } from "../../../Dammydata";
import TextUnderline from "../../../utils/textUnderline";

function JoinUs() {
  return (
    <div className="mt-6 py-10">
      <div className="w-[85%] mx-auto">
        <div className="text-center">
          <div className="w-[300px] mx-auto">
            <h2 className="text-3xl bg-[#FF7810] text-white p-1 rounded-md">
              How To Join
            </h2>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl text-[#1C2045] my-5 font-bold">
              3 Steps For Joining <br />
              ORION COMPUTER INSTITUTE
            </h1>
            <TextUnderline custom_width={150} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-start mt-10">
          {joinSteps.map((data) => (
            <div
              className="flex flex-col justify-center items-center p-5"
              key={data.id}
            >
              <div className="py-14 px-12 border-dashed border-2 border-gray-400 relative">
                <div className="w-[4.5rem] h-[4.5rem] rounded-full flex justify-center items-center absolute bg-[#FF5E2C] text-3xl font-bold text-white right-[-29px] top-[-35px]">
                  {data?.id}
                </div>
                <img src={data.icon} alt="" />
              </div>
              <h1 className="text-justify text-[#1C2045] text-3xl my-6">
                {data.title}
              </h1>
              <p className="text-center">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default JoinUs;
