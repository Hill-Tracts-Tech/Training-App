import noticeImage1 from "../../assets/icons/certification.png";
import noticeImage2 from "../../assets/icons/certification.png";
import noticeImage3 from "../../assets/icons/certification.png";

const NoticeBoard = () => {
  const notices = [
    {
      title: "Important Announcement",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur arcu at ex varius lacinia.",
      image: noticeImage1,
      date: "October 15, 2023",
    },
    {
      title: "Upcoming Event",
      description:
        "Join us for our annual event on November 10th. Don't miss it!",
      image: noticeImage2,
      date: "October 5, 2023",
    },
    {
      title: "Holiday Closure",
      description:
        "The academy will be closed for the holidays from December 24th to January 2nd.",
      image: noticeImage3,
      date: "October 1, 2023",
    },
  ];

  return (
    <div className="w-[85%] mx-auto">
      <marquee
        direction="left"
        height="40"
        width="400"
        onMouseOver={(e) => e.target.stop()}
        onMouseOut={(e) => e.target.start()}
        className="w-full border flex justify-center items-center text-[#4262a8] font-semibold text-xl"
      >
        <h1>
          **ডিপ্লোমা ইন ইঞ্জিনিয়ারিং কোর্স স্ট্রাকচার, সিলেবাস, প্রবিধান
          ডিপ্লোমা ইন ইঞ্জিনিয়ারিং কোর্স স্ট্রাকচার, সিলেবাস, প্রবিধান ২০১৬,
          ২০১০.** Admission Going On
        </h1>
      </marquee>
      <section className="flex flex-wrap p-10">
        {notices.map((notice, index) => (
          <div
            key={index}
            className="w-full md:w-1/3 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={notice.image}
                alt={`Notice ${index + 1}`}
                className="w-full h-40 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-primary">
                  {notice.title}
                </h3>
                <p className="text-gray-600">
                  {notice?.description.slice(0, 50)}....
                </p>
                <p className="text-gray-400 text-sm mt-2">{notice.date}</p>
              </div>
              <div className="p-4">
                <button
                  style={{
                    background:
                      "linear-gradient(90deg,#009688 0%,#2196F3 100%)",
                    color: "#fff",
                  }}
                  className="px-6 py-2 rounded-md"
                >
                  Read Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default NoticeBoard;
