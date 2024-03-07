import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link, useNavigate } from "react-router-dom";
import {
  useDeleteThumbnailsMutation,
  useGetThumbnailsQuery,
} from "../../../redux/features/thumbnail/thumbnailApi";
import toast from "react-hot-toast";

import Loader from "../../../components/Loader/Loader";
import { useAuth } from "../../../context/useAuth";

const Thumbnail = () => {
  const { setActiveZ } = useAuth();
  const { data: thumbnailData, isLoading, refetch } = useGetThumbnailsQuery();
  const [deleteThumbnail] = useDeleteThumbnailsMutation();
  const [eye, setEye] = useState({});

  const datahandler = (id) => {
    const singleItem = thumbnailData?.data?.find((item) => item?._id === id);
    setEye(singleItem);
  };

  const handleDelete = async (thumbnailId) => {
    try {
      const res = await deleteThumbnail(thumbnailId).unwrap();
      if (res.statusCode === 200) {
        toast.success("Thumbnail deleted successfully");
        refetch();
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const navigate = useNavigate();

  const handleEditClick = (item) => {
    navigate("/admin/thumbnailForm", { state: { editMode: true, item } });
  };

  if (isLoading)
    return (
      <div>
        <Loader type={"List"} />
      </div>
    );

  return (
    <div>
      <div>
        <div className="me-20 ps-5 mt-4">
          <Link
            className="shadow-md top-2 p-2 px-4 bg-primary  cursor-pointer  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md font-semibold text-white"
            to="/admin/thumbnailForm"
          >
            Add Thumbnail
          </Link>
          <table className="w-full border-collapse border overflow-x-scroll mt-3 shadow-lg">
            <thead>
              <tr className=" bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                <th className="border p-2">NO</th>
                <th className="border p-2">Title</th>
                <th className="border p-2"> Description</th>
                <th className="border p-2">Thumbnail</th>
                <th className="border p-2 w-[5vw]">Action</th>
              </tr>
            </thead>
            <tbody>
              {thumbnailData?.data?.map((item, i) => (
                <>
                  <tr key={i}>
                    <td className="border p-2 text-center font-bold">
                      <p>{i + 1}</p>
                    </td>
                    <td className="border p-2 text-center">{item?.title}</td>
                    <td className="border p-2 text-center">{item?.desc}</td>
                    <td className="border p-2 text-center font-bold flex justify-center items-center">
                      <img
                        className="w-24 h-12"
                        src={`${import.meta.env.VITE_APP_IMAGE_URL}/banners/${
                          item?.image
                        }`}
                        alt=""
                      />
                    </td>
                    <td className="border p-2 text-center">
                      <div className="dropdown">
                        <div tabIndex={0} role="button" className=" ">
                          {" "}
                          <MoreVertIcon />
                        </div>
                        <ul
                          tabIndex={0}
                          className="dropdown-content z-[1] menu px-3 py-4 shadow-lg bg-base-100 rounded-md ms-[-23px]"
                        >
                          <div className="flex flex-col justify-start gap-2 ">
                            <label
                              htmlFor="my_modal_5"
                              onClick={() => datahandler(item?._id)}
                              className="hover:text-blue-500  cursor-pointer flex justify-start gap-2"
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
                  className=" rounded h-[260px] w-full"
                  src={`${import.meta.env.VITE_APP_IMAGE_URL}/banners/${
                    eye?.image
                  }`}
                  alt=""
                />
                <p className="my-3">
                  <span className=" font-bold">Title: </span> {eye?.title}
                </p>
                <p>
                  <span className=" font-bold">Description:</span> {eye?.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
