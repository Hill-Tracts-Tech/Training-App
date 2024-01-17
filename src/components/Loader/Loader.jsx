/* eslint-disable react/prop-types */
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Loader.css";
const Loader = ({ type }) => {
  return (
    <div className="container">
      {type === "List" ? (
        <>
          <Skeleton count={1} height={"40px"} width={"15%"} />
          <Skeleton count={4} height={"100px"} width={"92%"} />
        </>
      ) : type === "Image" ? (
        <>
          <div>
            <div className="flex justify-center gap-16">
              <Skeleton count={1} height={"200px"} width={"330px"} />
              <Skeleton count={1} height={"200px"} width={"330px"} />
              <Skeleton count={1} height={"200px"} width={"330px"} />
            </div>
          </div>
        </>
      ) : type === "AdminImage" ? (
        <>
          <div>
            <Skeleton count={1} height={"40px"} width={"120px"} />
            <div className="flex justify-start gap-5">
              <Skeleton count={1} height={"200px"} width={"200px"} />
              <Skeleton count={1} height={"200px"} width={"200px"} />
              <Skeleton count={1} height={"200px"} width={"200px"} />
              <Skeleton count={1} height={"200px"} width={"200px"} />
            </div>
          </div>
        </>
      ) : type === "AdminHome" ? (
        <>
          <div>
            <div className="lg:ms-20 lg:mb-6">
              <Skeleton count={1} height={"40px"} width={"720px"} />
            </div>
            <div className="flex justify-start gap-5">
              <Skeleton count={1} height={"150px"} width={"270px"} />
              <Skeleton count={1} height={"150px"} width={"270px"} />
              <Skeleton count={1} height={"150px"} width={"270px"} />
            </div>
            <div className="flex justify-start gap-5 lg:mt-6">
              <Skeleton count={1} height={"300px"} width={"845px"} />
            </div>
          </div>
        </>
      ) : type === "Student" ? (
        <>
          <div style={{ marginLeft: "86px" }} className="flex gap-5">
            <div>
              <Skeleton count={1} height={"40px"} width={"500px"} />
            </div>
            <div>
              <Skeleton count={1} height={"40px"} width={"500px"} />
            </div>
            <div>
              <Skeleton count={1} height={"40px"} width={"100px"} />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              marginTop: "30px",
              marginLeft: "20px",
            }}
          >
            <Skeleton count={1} height={"200px"} width={"1120px"} />
          </div>
        </>
      ) : type === "Teacher" ? (
        <>
          <div className="flex gap-5 w-[90%] mx-auto">
            <Skeleton count={2} height={"250px"} width={"600px"} />
            <Skeleton count={2} height={"250px"} width={"550px"} />
          </div>
        </>
      ) : type === "CourseList" ? (
        <div className="flex gap-12 ">
          <Skeleton count={2} height={"340px"} width={"320px"} />
          <Skeleton count={2} height={"340px"} width={"360px"} />
          <Skeleton count={2} height={"340px"} width={"350px"} />
        </div>
      ) : type === "CourseDetails" ? (
        <>
          <div className="lg:flex items-center gap-8">
            <Skeleton count={1} height={"340px"} width={"600px"} />
            <Skeleton count={1} height={"340px"} width={"500px"} />
          </div>
          <div>
            <div className="lg:flex justify-between mt-20">
              <Skeleton count={1} height={"60px"} width={"150px"} />
              <Skeleton count={1} height={"60px"} width={"150px"} />
            </div>
            <div className=" mt-20">
              <Skeleton
                count={2}
                marginTop={"10px"}
                height={"70px"}
                width={"100%"}
              />
              <Skeleton count={2} height={"70px"} width={"100%"} />
            </div>
            <div className=" mt-20">
              <Skeleton count={1} height={"60px"} width={"150px"} />
              <Skeleton
                count={1}
                marginTop={"10px"}
                height={"200px"}
                width={"100%"}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div style={{ marginLeft: "100px" }}>
            <Skeleton count={1} height={"40px"} width={"90%"} />
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <Skeleton count={1} height={"250px"} width={"250px"} />
            <Skeleton count={1} height={"250px"} width={"500px"} />
            <Skeleton count={1} height={"250px"} width={"360px"} />
          </div>
        </>
      )}
    </div>
  );
};

export default Loader;
