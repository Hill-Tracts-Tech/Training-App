import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link, useNavigate } from "react-router-dom";
import {
  useDeleteResultMutation,
  useGetResultQuery,
} from "../../../redux/features/result/resultApi";

import Loader from "../../../components/Loader/Loader";
import toast from "react-hot-toast";
const AdminResult = () => {
  const { data: resultData, isLoading, refetch } = useGetResultQuery();
  const [deleteResult] = useDeleteResultMutation();
  const [eye, setEye] = useState({});

  const datahandler = (id) => {
    const singleItem = resultData?.data?.find((item) => item?._id === id);
    setEye(singleItem);
  };
  console.log(resultData);
  // file identified
  const isPDF = (fileName) => {
    return fileName?.toLowerCase().endsWith(".pdf");
  };

  const navigate = useNavigate();

  const handleEditClick = (item) => {
    navigate("/admin/ResultForm", { state: { editMode: true, item } });
  };

  const handleDelete = async (resultId) => {
    try {
      await deleteResult(resultId);
      toast.success("Result deleted successfully");
      refetch();
    } catch (error) {
      toast.error(error);
    }
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
        <div className="md:me-20 mr-3 ps-5 mt-4">
          <Link
            className="shadow-md top-2 z p-2 px-4 bg-primary  cursor-pointer  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md font-semibold text-white"
            to="/admin/ResultForm"
          >
            Add Result
          </Link>
          <table className="w-full border-collapse border overflow-x-scroll mt-3 shadow-lg">
            <thead>
              <tr className=" bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                <th className="border p-2">NO</th>
                <th className="border p-2">Course Name</th>
                <th className="border p-2"> Batch Number</th>
                <th className="border p-2">Image/PDF </th>
                <th className="border p-2 w-[5vw]">Action</th>
              </tr>
            </thead>
            <tbody>
              {resultData?.data?.map((item, i) => (
                <>
                  <tr key={i}>
                    <td className="border p-2 text-center font-bold">
                      <p>{i + 1}</p>
                    </td>
                    <td className="border p-2 text-center">
                      {item?.courseName?.title}
                    </td>
                    <td className="border p-2 text-center">
                      {item?.batchNo?.batchName}
                    </td>
                    <td className="border p-2 text-center font-bold flex justify-center items-center">
                      {isPDF(item?.file) ? (
                        <a
                          href={`${import.meta.env.VITE_APP_IMAGE_URL}/result/${
                            item?.file
                          }`}
                          target="_blank"
                          className="cursor-pointer underline"
                          rel="noreferrer"
                        >
                          {item?.file}
                        </a>
                      ) : (
                        <img
                          className="w-24 h-12"
                          src={`${import.meta.env.VITE_APP_IMAGE_URL}/result/${
                            item?.file
                          }`}
                          alt=""
                        />
                      )}
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
                              className="hover:text-blue-500  cursor-pointer flex justify-start gap-2"
                              onClick={() => datahandler(item?._id)}
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
                {isPDF(eye?.file) ? (
                  <a
                    href={`${import.meta.env.VITE_APP_IMAGE_URL}/result/${
                      eye?.file
                    }`}
                    target="_blank"
                    className="cursor-pointer underline"
                    rel="noreferrer"
                  >
                    {eye?.file}
                  </a>
                ) : (
                  <img
                    className="w-24 h-12"
                    src={`${import.meta.env.VITE_APP_IMAGE_URL}/result/${
                      eye?.file
                    }`}
                    alt=""
                  />
                )}
                <p className="my-3">
                  <span className=" font-bold">Batch No:</span> {eye?.batchNo}
                </p>
                <p>
                  <span className=" font-bold">Course Name:</span>{" "}
                  {eye?.courseName}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminResult;
