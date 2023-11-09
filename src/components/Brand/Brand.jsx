import logo1 from "../../assets/img/logo1.png";
import logo2 from "../../assets/img/logo2.png";
function Brand() {
  return (
    <div className="w-[85%] mx-auto">
      <div className="flex justify-between p-6">
        <div className="left">
          <div className="w-[60px] h-[60px] rounded-full shadow-md">
            <img className="w-full h-full object-cover" src={logo1} alt="" />
          </div>
          <div>
            <h1 className="text-2x font-semibold uppercase mt-4">
              Orion Selai Proshikhon center
            </h1>
            <p>Institute Code - 70304</p>
          </div>
        </div>
        <div className="left">
          <div className="w-[60px] h-[60px] rounded-full shadow-md">
            <img className="w-full h-full object-cover" src={logo2} alt="" />
          </div>
          <div>
            <h1 className="text-2x font-semibold uppercase mt-4">
              Orion computer Institute
            </h1>
            <p>Institute Code - 70262</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Brand;
