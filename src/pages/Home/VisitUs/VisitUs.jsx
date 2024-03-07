import img from "../../../assets/img/howToVisit.jpg";
import TextUnderline from "../../../utils/textUnderline";
import "./VisitUs.css";
function VisitUs() {
  const openOrScrollToIframe = () => {
    const iframeElement = document.getElementById("myIframe");

    // Option 1: Open the iframe in a new window
    // window.open(iframeElement.src, '_blank');

    // Option 2: Scroll to the iframe on the same page
    iframeElement.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-pattern">
      <div className="w-[85%] flex flex-col md:flex-row mx-auto gap-x-8 gap-y-3 justify-center items-center">
        <div className="w-full md:w-1/2 bounce">
          <img className="visitImg" src={img} alt="" />
        </div>
        <div className="w-full md:w-1/2 p-6">
          <div>
            <h1 className="text-4xl text-blue-600 my-5 font-bold">
              How To Visit / Address ORION COMPUTER INSTITUTE?
            </h1>
            <TextUnderline custom_width={150} />
          </div>
          <div>
            <p className="leading-8 mt-4 text-justify">
              Our institute is located at S.I Villa, 6 No Ward, Satkania
              Municipality, Chattogram. We are situated in the beautiful town of
              Satkania, which is a part of Chattogram in Bangladesh.
            </p>
            <button
              onClick={openOrScrollToIframe}
              className="px-5 py-2 bg-blue-500 rounded-md outline-none border-none transition duration-300 ease-in-out text-white mt-6"
            >
              See Map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default VisitUs;
