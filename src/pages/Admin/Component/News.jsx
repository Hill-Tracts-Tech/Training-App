import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  useDeleteNoticeMutation,
  useGetNoticeQuery,
} from "../../../redux/features/notice/noticeApi";
import toast from "react-hot-toast";
import Loader from "../../../components/Loader/Loader";
import { useAuth } from "../../../context/useAuth";

const News = () => {
  const { setActiveZ } = useAuth();
  const [deleteNotice] = useDeleteNoticeMutation();
  const { data: newsData, isLoading, refetch } = useGetNoticeQuery();
  const [eye, setEye] = useState({});

  const datahandler = (id) => {
    const singleItem = newsData?.data?.find((item) => item?._id === id);
    setEye(singleItem);
  };

  const handleDelete = async (noticeId) => {
    try {
      const result = await deleteNotice(noticeId).unwrap();
      if (result?.statusCode === 200) {
        toast.success("Notice deleted successfully");
        refetch();
      }
    } catch (error) {
      toast.error("Fail to delete");
    }
  };

  const navigate = useNavigate();

  const handleEditClick = (item) => {
    navigate("/admin/noticeForm", { state: { editMode: true, item } });
  };

  if (isLoading)
    return (
      <div>
        {" "}
        <Loader type={"List"} />
      </div>
    );

  return (
    <div>
      {/* <NewsForm /> */}
      <div>
        <div className="md:me-20 me-3 ps-5 mt-4">
          <Link
            className="shadow-md top-2 z p-2 px-4 bg-primary  cursor-pointer  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md font-semibold text-white"
            to="/admin/noticeForm"
          >
            Add Notice
          </Link>
          <table className="w-full border-collapse border overflow-x-scroll mt-3 shadow-lg">
            <thead>
              <tr className=" bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                <th className="border p-2">Notice Id</th>
                <th className="border p-2">Image</th>
                <th className="border p-2">Title</th>
                <th className="border p-2 ">Description </th>
                <th className="border p-2 w-[6vw]">Action</th>
              </tr>
            </thead>
            <tbody>
              {newsData?.data?.map((item, i) => (
                <>
                  <tr key={i}>
                    <td className="border p-2 font-bold text-center">
                      <p>{i + 1}</p>
                    </td>
                    <td className="border p-2 font-bold">
                      <img
                        className="w-12 rounded object-contain"
                        src={`${import.meta.env.VITE_APP_IMAGE_URL}/notices/${
                          item?.file
                        }`}
                        alt=""
                      />
                    </td>
                    <td className="border p-2">{item?.title}</td>
                    <td className="border p-2">{item?.desc}</td>
                    <td className="border p-2 text-center">
                      <div className="dropdown">
                        <div tabIndex={0} role="button" className=" ">
                          {" "}
                          <MoreVertIcon />
                        </div>
                        <ul
                          tabIndex={0}
                          className="dropdown-content z-[1] menu px-3 py-4 shadow-lg bg-base-100 rounded-md ms-[-30px]"
                        >
                          <div className="flex flex-col justify-start gap-2 ">
                            <label
                              htmlFor="my_modal_5"
                              className="hover:text-blue-500  cursor-pointer flex justify-start gap-2"
                              onClick={() => datahandler(item?._id)}
                              onChange={setActiveZ("")}
                            >
                              <VisibilityIcon />
                              <p>Details</p>
                            </label>
                            <div
                              onClick={() => handleEditClick(item)}
                              className=" hover:text-blue-500  cursor-pointer flex justify-start gap-2"
                            >
                              <EditIcon className=" " />
                              <p>Edit</p>
                            </div>
                            <div
                              onClick={() => handleDelete(item?._id)}
                              className="flex justify-start gap-2 hover:text-blue-500  cursor-pointer"
                            >
                              <DeleteIcon className=" " />
                              <p>Delete</p>
                            </div>
                          </div>
                        </ul>
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
          <div className="modal-action block">
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
                  src={`${import.meta.env.VITE_APP_IMAGE_URL}/notices/${
                    eye?.file
                  }`}
                  alt=""
                />
                <p className="my-3">
                  <span className="font-bold ">Title:</span> {eye?.title}
                </p>
                <p>
                  <span className="font-bold">Description:</span> {eye?.desc}
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
