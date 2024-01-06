import img from "../../assets/img/teachingMethod.png";
import "./about.css";
import TextUnderline from "../../utils/textUnderline";
function TeachingMethod() {
  return (
    <div className="p-9">
      <div className="w-[85%] px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-x-10">
          <div className="w-full md:w-[40%] my-9 bounce">
            <img src={img} alt="" />
          </div>
          <div className="w-full md:w-[60%] px-8">
            <h2 className="text-3xl bg-[#FF7810] w-[210px] text-center text-white">
              How We Teach
            </h2>
            <div>
              <h1 className="text-4xl text-[#1C2045] my-5 font-bold">
                Our Teaching Methods
              </h1>
              <TextUnderline custom_width={150} />
              <p className="my-5">
                At ORION COMPUTER INSTITUTE, we realize that not all students
                learn at the same pace. In a classroom of more than six
                students, certain students will get left behind because of the
                lack of communication between the students and the instructor.
                We help our students grow their computer awareness using modern
                teaching methods <br />
                <br />
                Our Computer Learning Center is focused on providing futuristic
                teaching methodologies using interactive elements. Our 1 student
                1 computer policy assures every student gets enough machine time
                to learn and practice.
                <br />
                <br /> All our courses have been designed and taught by industry
                experts, who are associated in with the respective IT field for
                many years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TeachingMethod;
