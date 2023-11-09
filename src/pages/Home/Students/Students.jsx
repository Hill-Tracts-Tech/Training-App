import "./Students.css";
import img from "../../../assets/img/howToVisit.png";
import TextUnderline from "../../../utils/textUnderline";
const studentImages = [
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
];

function Students() {
  return (
    <div className="mt-8">
      <div className="student-container">
        <div
          style={{
            background:
              "linear-gradient(rgba(71, 142, 200, 0.751), rgba(71, 142, 200, 0.751))",
          }}
          className="absolute text-white left-[50%] md:top-[30%] top-[40%] translate-x-[-50%] translate-y-[-50%] z-50 py-8 px-11 rounded-md"
        >
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl text-center bg-[#FF7810] text-white">
              100+ Job placement
            </h1>
            <div className="flex justify-center items-center flex-col flex-nowrap gap-y-3">
              <h1 className="text-3xl">Our Students Gets Job</h1>
              <TextUnderline custom_width={150} />
            </div>
            <p className="text-center">
              Our Students have received placements
              <br /> in multiple Website Agencies and IT Companies.
            </p>
          </div>
        </div>
        {studentImages.map((image, index) => (
          <div
            key={index}
            className={`${(index + 1) % 2 === 0 ? "student2" : "student"}`}
            style={{
              animationDelay: `${Math.random() * 4}s`,
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
            }}
          >
            <img src={image} alt={`Student ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Students;
