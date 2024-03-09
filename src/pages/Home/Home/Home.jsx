import Banner from "../Banner/Banner";
import CourseList from "../CourseList/CourseList";
// import CourseList from "../Courses/Courses";
import Facilities from "../Facilities/Facilities";
import Introduction from "../Introduction/Introduction";
import JoinUs from "../JoinUs/JoinUs";
import VisitUs from "../VisitUs/VisitUs";
import Man1 from "../../../assets/img/Man1.jpg";
import Man2 from "../../../assets/img/Man2.png";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className=" lg:grid grid-cols-12">
        <div className=" lg:col-span-11">
          <Banner />
          <Introduction />
        </div>
        <div className=" mx-auto w-[85%] lg:w-auto  lg:col-span-1 mt-10 lg:ms-[-186px]  lg:me-20">
          <h1 className=" uppercase  rounded border-2 mb-2  font-bold border-orange-300 bg-[#FF7810] text-white h-10 flex justify-center items-center">
            Chairmen
          </h1>
          <div className=" shadow-lg p-1 ">
            <img
              src={Man1}
              alt=""
              className="h-52 w-full rounded border-[1px] border-black"
            />
            <p className="text-lg my-2 font-semibold">Engineer Md. Ishaque.</p>
          </div>
          <h1 className="mt-12 uppercase  rounded border-2 mb-2  font-bold border-orange-300 bg-[#FF7810] text-white h-10 flex justify-center items-center">
            Chief Director (OCI)
          </h1>
          <div className=" shadow-lg p-1 mb-8">
            <img src={Man2} alt="" className="h-52 w-full rounded " />
            <p className="text-lg my-2 font-semibold">
              Engineer Md. Shaiful Islam
            </p>
          </div>
          <h1 className="mt-12 uppercase  rounded border-2 mb-2  font-bold border-orange-300 bg-[#FF7810] text-white h-10 flex justify-center items-center">
            Chief Director (OSPC)
          </h1>
          <div className=" shadow-lg p-1">
            <img
              src="http://bteb.portal.gov.bd/sites/default/files/files/bteb.portal.gov.bd/npfblock/3b0647de_6d3d_4232_8cb7_184422718ea4/Shamsun%20Naher%20Mp.png"
              alt=""
              className="h-52 w-full rounded border-[1px] border-black"
            />
            <p className="text-lg my-2 font-semibold">
              Engineer Iti Ara Khatun.
            </p>
          </div>
        </div>
      </div>
      <Facilities />
      <VisitUs />
      {/* <CourseList /> */}
      <JoinUs />
      <CourseList />
    </div>
  );
};
export default Home;
