import { useState } from "react";
import vision from "../../assets/img/vision.png";
import mission from "../../assets/img/mission.jpg";
import placement from "../../assets/img/planning.png";
import TextUnderline from "../../utils/textUnderline";
function MissionVision() {
  const [activeTab, setActiveTab] = useState("Our Vision");

  const tabData = [
    {
      tab: "Our Vision",
      title: "Quality Technical Education For Everybody.",
      underline: <TextUnderline />,
      content:
        "Our vision is to offer IT and Non IT training to students and professionals who likes to improve skill set and grow in their professional career. We want to become a pioneer in the domain of professional training services with world-class lab facilities. We will strive to provide placements to our students in the best tech companies and MNCs.",
      imageSrc: vision,
    },
    {
      tab: "Our Mission",
      title: "Successful Professional Career For Our Students",
      underline: <TextUnderline />,
      content:
        "ORION COMPUTER INSTITUTE was born out of the need to provide trained, employable tech expects to the ever expanding IT industry. We strive to promote professionalism and quality of service.<br/>In a tough job market, our mission is to provide students the foundation for a successful career.",
      imageSrc: mission,
    },
    {
      tab: "Our Placements",
      title: "100% Placement Assistance In WebDev Companies And MNCs",
      underline: <TextUnderline />,
      content:
        "Our Training and placement program always attracts multiple companies from Kolkata and nearby areas looking for their next best employee. No other IT institute in Habra offers a 100% job placement assistance other than ours and that too within reputed companies. These companies hire our students on a regular basis as our students are always readily deployable for their projects. To get regular updates on our placement, keep an eye on our facebook page",
      imageSrc: placement,
    },
  ];

  const handleClickTab = (tabTitle) => {
    setActiveTab(tabTitle);
  };
  return (
    <div className="mb-8">
      <div className="w-full md:w-[85%] mx-auto p-4 shadow-md">
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between my-9">
            {tabData.map((tab) => (
              <button
                key={tab.tab}
                onClick={() => handleClickTab(tab.tab)}
                className={`px-4 py-2 w-full font-semibold ${
                  activeTab === tab.tab
                    ? "text-orange-500 ease-in duration-300 border-solid border-b-[2.5px] border-orange-700"
                    : ""
                }`}
              >
                {tab.tab}
              </button>
            ))}
          </div>
          <div className="flex space-x-4 ease-in duration-300">
            <div className="w-1/2">
              <img
                src={tabData?.find((tab) => tab.tab === activeTab)?.imageSrc}
                alt={activeTab}
                className="w-full h-auto bounce rounded"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-2xl font-bold">
                {tabData?.find((tab) => tab.tab === activeTab)?.title}
              </h2>
              <div className="my-7">
                {tabData?.find((tab) => tab.tab === activeTab)?.underline}
              </div>
              <p className=" text-justify">
                {tabData?.find((tab) => tab.tab === activeTab)?.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MissionVision;
