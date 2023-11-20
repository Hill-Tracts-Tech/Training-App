import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useState } from "react";
const News = () => {
  const [eye, setEye] = useState({});
  const data = [
    {
      id: 1,
      title: "Breaking News 1",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
      description:
        "This is the description for breaking news 1. It contains important information and details about the event.",
    },
    {
      id: 2,
      title: "Latest Update 2",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
      description:
        "Here is the latest update on a significant event. The description provides insights and context to the readers.",
    },
    {
      id: 3,
      title: "Special Report 3",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
      description:
        "A special report with in-depth coverage and analysis. The description dives into the various aspects of the topic.",
    },
  ];
  const datahandler = (id) => {
    const singleItem = data?.find((item) => item?.id === id);
    setEye(singleItem);
  };
  return (
    <div>
      {/* <NewsForm /> */}
      <div>
        <div className="me-20 ps-5 mt-4">
          <Link
            className="relative shadow-lg top-2 z p-2 px-4 bg-primary  cursor-pointer  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md font-semibold text-white"
            to="/admin/noticeForm"
          >
            Add Notice
          </Link>
          <table className="w-full border-collapse border overflow-x-scroll mt-5 shadow-lg">
            <thead>
              <tr className=" bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                <th className="border p-2">NO</th>
                <th className="border p-2">Image</th>
                <th className="border p-2">Title</th>
                <th className="border p-2">Description </th>
                <th className="border p-2 ">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, i) => (
                <>
                  <tr key={i}>
                    <td className="border p-2 font-bold">
                      <p>{i + 1}</p>
                    </td>
                    <td className="border p-2 font-bold">
                      <img
                        className="w-full h-32 rounded"
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
                        alt=""
                      />
                    </td>
                    <td className="border p-2">{item?.title}</td>
                    <td className="border p-2">{item?.description}</td>
                    <td className="border p-2">
                      <div className="flex justify-center gap-3 items-center">
                        <label
                          htmlFor="my_modal_5"
                          className="hover:text-blue-500"
                          onClick={() => datahandler(item?.id)}
                        >
                          <VisibilityIcon />
                        </label>
                        <DeleteIcon className="text-red-400 hover:text-black" />
                      </div>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <input type="checkbox" id="my_modal_5" className="modal-toggle" />
      <div className="modal z-50">
        <div className="modal-box">
          <div className="modal-action">
            <label
              htmlFor="my_modal_5"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              X
            </label>
            <div className="">
              <div>
                <img
                  className=" rounded h-[220px] w-full"
                  src={eye?.image}
                  alt=""
                />
                <p className="my-3">
                  <span className="font-bold ">Title:</span> {eye?.title}
                </p>
                <p>
                  <span className="font-bold">Description:</span>{" "}
                  {eye?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
