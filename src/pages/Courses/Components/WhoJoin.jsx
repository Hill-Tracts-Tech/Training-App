import TextUnderline from "../../../utils/textUnderline";
import img from "../../assets/img/whoShouldJoin.png";
import { DoneAll } from "@mui/icons-material";

function WhoJoin() {
  return (
    <div className="w-[85%] mx-auto px-4">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-x-10">
        <div
          style={{
            backgroundImage:
              "radial-gradient(#626262 1.5px, transparent 1.5px), radial-gradient(#626262 1.5px, transparent 1.5px)",
            backgroundSize: "26px 26px",
            backgroundPosition: "0 0, 13px 13px",
            backgroundColor: "#ffffff",
          }}
          className="w-full h-full md:w-[50%] my-9"
        >
          <img className="w-full h-full object-cover bounce" src={img} alt="" />
        </div>
        <div className="w-full md:w-[50%] px-8">
          <div>
            <h1 className="text-4xl text-[#1C2045] my-5 font-bold">
              Who Should Join?
            </h1>
            <TextUnderline custom_width={150} />
            <ul className="my-5 flex flex-col justify-start gap-y-4">
              <li>
                {" "}
                <DoneAll
                  style={{
                    color: "#ff7810",
                    fontSize: "22px",
                    marginRight: "4px",
                    fontWeight: "bold",
                  }}
                />{" "}
                Students (Freshers / 10+2 / Graduates)
              </li>{" "}
              <li>
                {" "}
                <DoneAll
                  style={{
                    color: "#ff7810",
                    fontSize: "22px",
                    marginRight: "4px",
                    fontWeight: "bold",
                  }}
                />{" "}
                Professionals Job seekers
              </li>{" "}
              <li>
                {" "}
                <DoneAll
                  style={{
                    color: "#ff7810",
                    fontSize: "22px",
                    marginRight: "4px",
                    fontWeight: "bold",
                  }}
                />{" "}
                Graphics and Web Designers
              </li>{" "}
              <li>
                {" "}
                <DoneAll
                  style={{
                    color: "#ff7810",
                    fontSize: "22px",
                    marginRight: "4px",
                    fontWeight: "bold",
                  }}
                />{" "}
                Web Developers UI Designer
              </li>
              <li>
                {" "}
                <DoneAll
                  style={{
                    color: "#ff7810",
                    fontSize: "22px",
                    marginRight: "4px",
                    fontWeight: "bold",
                  }}
                />{" "}
                Digital Marketing Executives
              </li>{" "}
              <li>
                {" "}
                <DoneAll
                  style={{
                    color: "#ff7810",
                    fontSize: "22px",
                    marginRight: "4px",
                    fontWeight: "bold",
                  }}
                />{" "}
                SEO & SMO Professionals
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WhoJoin;
