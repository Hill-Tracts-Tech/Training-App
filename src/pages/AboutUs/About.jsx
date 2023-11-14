import aboutUsImage1 from "../../assets/img/trainingCenter.png";
import aboutUsImage2 from "../../assets/img/trainingCenter.png";
import aboutUsImage3 from "../../assets/img/trainingCenter.png";
import aboutUsImage4 from "../../assets/img/trainingCenter.png";

function About() {
  return (
    <section className="flex flex-wrap items-center justify-between p-10">
      {/* Left Side - About Us Description */}
      <div className="w-full md:w-2/3 md:pr-10">
        <div className="mb-4">
          <h2 className="text-3xl bg-[#FF7810] w-[180px] text-center text-white">
            About Us
          </h2>
          <h3 className="text-4xl text-[#ffffff] my-5 font-bold">
            About Learn Computer Academy
          </h3>
          <p className="text-white">
            Learn Computer Academy is the best Computer Center in Habra with
            special focus in Website Design and Development. We are situated at
            Saptapally, Khudiram Basu Road, about 1km from Habra Station. Our
            goal is to provide cost-Effective, Quality & Real time Training
            courses to our students and help them in their professional career.
            Factors that makes us best are:
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-secondary">
            Our Facilities
          </h3>
          <ul className="list-disc list-inside text-white">
            <li>State-of-the-art classrooms with interactive whiteboards.</li>
            <li>
              High-speed internet connectivity for a seamless learning
              experience.
            </li>
            <li>Experienced and dedicated teaching staff.</li>
            <li>
              Library with a vast collection of books and digital resources.
            </li>
            <li>Modern computer labs equipped with the latest technology.</li>
            <li>
              Recreational areas for relaxation and extracurricular activities.
            </li>
          </ul>
        </div>
      </div>

      {/* Right Side - Photo Gallery */}
      <div className="w-full md:w-1/3">
        <div className="grid grid-cols-2 gap-2">
          <img
            src={aboutUsImage1}
            alt="Gallery Image 1"
            className="w-full h-auto"
          />
          <img
            src={aboutUsImage2}
            alt="Gallery Image 2"
            className="w-full h-auto"
          />
          <img
            src={aboutUsImage3}
            alt="Gallery Image 3"
            className="w-full h-auto"
          />
          <img
            src={aboutUsImage4}
            alt="Gallery Image 4"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
export default About;
