import { useGetNoticeQuery } from "../../redux/features/notice/noticeApi";
import moment from "moment";
import { ImageUrl } from "../../utils/imageUrl";
import Loader from "../../components/Loader/Loader";

const NoticeBoard = () => {
  const { data: notices, isLoading, isError, error } = useGetNoticeQuery();

  let content = null;

  if (isLoading) {
    content = (
      <div>
        <Loader type={""} />
      </div>
    );
  } else if (!isLoading && isError) {
    content = <div>{error}</div>;
  } else {
    content = (
      <div className="w-[85%] mx-auto">
        <marquee
          direction="left"
          height="40"
          width="400"
          onMouseOver={(e) => e.target.stop()}
          onMouseOut={(e) => e.target.start()}
          className="w-full border flex justify-center items-center text-[#4262a8] font-semibold text-xl"
        >
          <h1>{notices?.data[0]?.desc}</h1>
        </marquee>
        <section className="flex flex-wrap p-10">
          {notices?.data?.map((notice, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={`${ImageUrl}/notices/${notice?.file}`}
                  alt={`Notice ${index + 1}`}
                  className="w-full h-40  object-contain"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-primary">
                    {notice.title}
                  </h3>
                  <p className="text-gray-600">
                    {notice?.desc?.slice(0, 50)}....
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    {moment(notice?.createdAt).format("LL")}
                  </p>
                </div>
                <div className="p-4">
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                    style={{
                      background:
                        "linear-gradient(90deg,#009688 0%,#2196F3 100%)",
                      color: "#fff",
                    }}
                    className="px-6 py-2 rounded-md "
                  >
                    Read Details
                  </button>
                  <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                      </form>
                      <p className="text-gray-400 text-sm my-2">
                        {moment(notice?.createdAt).format("LL")}
                      </p>
                      <div className="">
                        <div>
                          <img
                            className=" rounded h-[220px] w-full"
                            src={`${ImageUrl}/notices/${notice?.file}`}
                            alt=""
                          />
                          <p className="my-3">
                            <span className="font-bold ">Title:</span>{" "}
                            {notice?.title}
                          </p>
                          <p>
                            <span className="font-bold">Description:</span>{" "}
                            {notice?.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    );
  }

  return content;
};

export default NoticeBoard;
