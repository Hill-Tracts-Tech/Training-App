import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Loader from "../../../components/Loader/Loader";
import {
  useDeleteBatchMutation,
  useGetAllBatchQuery,
} from "../../../redux/features/batch/batchApi";
import { useAuth } from "../../../context/useAuth";

const Batch = () => {
  const { setActiveZ } = useAuth();
  const { data: batchData, isLoading, refetch } = useGetAllBatchQuery();
  const [deleteBatch] = useDeleteBatchMutation();
  const [eye, setEye] = useState({});

  const datahandler = (id) => {
    const singleItem = batchData?.data?.find((item) => item?._id === id);
    setEye(singleItem);
  };

  const handleDelete = async (batchId) => {
    try {
      const res = await deleteBatch(batchId).unwrap();
      if (res.statusCode === 200) {
        toast.success("Batch deleted successfully");
        refetch();
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const navigate = useNavigate();

  const handleEditClick = (item) => {
    navigate("/admin/batchForm", { state: { editMode: true, item } });
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
        <div className="md:me-20 me-3 ps-5 mt-4">
          <Link
            className="shadow-md top-2 p-2 px-4 bg-primary  cursor-pointer  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md font-semibold text-white"
            to="/admin/batchForm"
          >
            Add New Batch
          </Link>
          <table className="w-full border-collapse border overflow-x-scroll mt-3 shadow-lg">
            <thead>
              <tr className=" bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                <th className="border p-2">SI NO</th>
                <th className="border p-2">Name</th>
                <th className="border p-2"> Batch No</th>
                <th className="border p-2">Total Student</th>
                <th className="border p-2 w-[5vw]">Action</th>
              </tr>
            </thead>
            <tbody>
              {batchData?.data?.map((item, i) => (
                <>
                  <tr key={i}>
                    <td className="border p-2 text-center font-bold">
                      <p>{i + 1}</p>
                    </td>
                    <td className="border p-2 text-center">
                      {item?.batchName}
                    </td>
                    <td className="border p-2 text-center">{item?.batchNo}</td>
                    <td className="border p-2 text-center">
                      {item?.totalStudent}
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
                <p className="my-3">
                  <span className=" font-bold">Batch Name: </span>{" "}
                  {eye?.batchName}
                </p>
                <p>
                  <span className=" font-bold">About:</span> {eye?.about}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Batch;
