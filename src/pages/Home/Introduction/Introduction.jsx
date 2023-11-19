import img from "../../../assets/img/trainingCenter.png";
import { AccessTime, Check, NetworkPing } from "@mui/icons-material";
import TextUnderline from "../../../utils/textUnderline";
import "./Introduction.css";
function Introduction() {
  return (
    <div className="bg-pattern p-9">
      <div className="w-[85%] px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-x-10">
          <div className="w-full md:w-[40%] my-9 bounce">
            <img src={img} alt="" />
          </div>
          <div className="w-full md:w-[60%] px-8">
            <h2 className="text-3xl bg-[#FF7810] w-[120px] rounded-md p-1 text-center text-white">
              We Are
            </h2>
            <div>
              <h1 className="text-4xl text-blue-600 my-5 font-bold">
                Learn Computer Academy
              </h1>
              <TextUnderline custom_width={150} />
              <p className="my-5">
                We are the{" "}
                <span className="font-bold">
                  best computer institute in Habra
                </span>{" "}
                providing courses in Graphics Design, Web Design, Web
                Development, and Basic Computer Training. Our job oriented
                courses are created and taught by experts in the industry. Our
                Website Design training in Habra is provided with real time
                examples and make sure our students participate in Live projects
                for actual clients so that they gain 100% practical knowledge
                and understand the subject completely.
              </p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Introduction;
