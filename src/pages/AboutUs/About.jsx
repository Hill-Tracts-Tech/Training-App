import aboutUsImage1 from "../../assets/img/howToVisit.jpg";
import aboutUsImage2 from "../../assets/img/howToVisit.jpg";
import aboutUsImage3 from "../../assets/img/howToVisit.jpg";
import aboutUsImage4 from "../../assets/img/howToVisit.jpg";

function About() {
  return (
    <section className="flex flex-wrap items-center justify-between lg:p-10">
      {/* Left Side - About Us Description */}
      <div className="w-full text-justify md:w-2/3 md:pr-10">
        <div className="mb-4">
          <h2 className="text-3xl bg-[#FF7810] w-[180px] text-center text-white p-1 rounded-md">
            About Us
          </h2>
          <h3 className="text-4xl text-blue-500 lg:my-5 font-bold">
            About ORION COMPUTER INSTITUTE
          </h3>
          <p className=" overflow-y-auto h-[300px] ">
            The Present age is Information and Communication Technology. In
            Today’s age, everything is Stagnant except Computer Education. We
            are Determined to Develop a healthy culture by nurturing our
            thousand years of history, heritage, education and culture. It is
            our aim to create intelligent technical and creative generation in
            view of the responsibility of this immense power. Keeping this
            objective in mind, We have established a technical education
            institute named Orion Computer Institute , Which is affiliated to
            the Bangladesh Technical Education Board , Under The Government of
            the People’s Republic of Bangladesh , in Ward No 06 in Satkania
            Municipality. We always strive to bring the 20th century modern
            style to the new generation, We are trying to give International
            Information Technology Knowledge. Now Plans have been Undertaken to
            Encourage Technical Creativity and Progressive Technology, So that
            we also have a small role in Building a Prosperous Society and
            State. The new generation is far ahead in their dream journey today.
            Their creative and technical initiative have had a considerable
            impact on the formation of modern society. As a result, Computer
            Technology at all levels has been able to reach the door of
            everyone. The source of motivation for the new generation is the
            computer based on modern technology, which will play a greater role
            in fulfilling their dreams. Today’s youth spend half of the time
            they spend unnecessarily on Face book or mobile if they search on
            Google and spend on IT education , Then one day he himself will see
            new possibilities for his career. No major degree is required to
            take this Opportunity. It is possible to establish yourself as an
            efficient and IT professional by doing some basic computer course
            with strong interest and hard work. Besides we are always active in
            offering new and up-to-date IT related courses. Hopefully through
            technical education we will be able to open the doors of success in
            the ICT sector. Inshallah.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-blue-600">
            Our Facilities
          </h3>
          <ul className="list-disc list-inside">
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
      <div className="w-full md:w-1/3 lg:mt-[-240px]">
        <div className="grid grid-cols-2 gap-2">
          <img
            src={aboutUsImage1}
            alt="Gallery Image 1"
            className="w-full h-auto rounded-s-2xl"
          />
          <img
            src={aboutUsImage2}
            alt="Gallery Image 2"
            className="w-full h-auto rounded-e-2xl"
          />
          <img
            src={aboutUsImage3}
            alt="Gallery Image 3"
            className="w-full h-auto rounded-s-2xl"
          />
          <img
            src={aboutUsImage4}
            alt="Gallery Image 4"
            className="w-full h-auto rounded-e-2xl"
          />
        </div>
      </div>
    </section>
  );
}
export default About;
