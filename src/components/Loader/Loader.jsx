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
            <Skeleton count={1} height={"30px"} width={"15%"} />
            <div>
              <Skeleton count={1} height={"100px"} width={"90%"} />
              <Skeleton count={1} height={"100px"} width={"90%"} />
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
      ) : type === "roomDetails" ? (
        <>
          <div className="roomDetails">
            <Skeleton count={1} height={"270px"} width={"400px"} />
            <Skeleton count={1} height={"270px"} width={"720px"} />
          </div>
          <Skeleton count={1} height={"220px"} width={"100%"} />
        </>
      ) : type === "restaurantDetails" ? (
        <div className="restaurantDetails">
          <Skeleton count={1} height={"430px"} width={"400px"} />
          <Skeleton count={3} height={"140px"} width={"600px"} />
        </div>
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
