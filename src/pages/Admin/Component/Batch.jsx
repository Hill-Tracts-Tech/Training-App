import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Loader from "../../../components/Loader/Loader";
import {
  useDeleteBatchMutation,
  useGetAllBatchQuery,
} from "../../../redux/features/batch/batchApi";

const Batch = () => {
  const { data: batchData, isLoading } = useGetAllBatchQuery();
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
        <div className="me-20 ps-5 mt-4">
          <Link
            className="relative shadow-lg top-2 p-2 px-4 bg-primary  cursor-pointer  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md font-semibold text-white"
            to="/admin/batchForm"
          >
            Add New Batch
          </Link>
          <table className="w-full border-collapse border overflow-x-scroll mt-5 shadow-lg">
            <thead>
              <tr className=" bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                <th className="border p-2">SI NO</th>
                <th className="border p-2">Name</th>
                <th className="border p-2"> Batch No</th>
                <th className="border p-2">Total Student</th>
                <th className="border p-2 ">Action</th>
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
                      <div className="flex justify-center gap-3 items-center">
                        <label
                          htmlFor="my_modal_5"
                          className="hover:text-black text-green-500 cursor-pointer"
                          onClick={() => datahandler(item?._id)}
                        >
                          <VisibilityIcon />
                        </label>
                        <EditIcon
                          onClick={() => handleEditClick(item)}
                          className=" text-blue-400 hover:text-black cursor-pointer"
                        />
                        <DeleteIcon
                          className="text-red-400 hover:text-black cursor-pointer"
                          onClick={() => handleDelete(item?._id)}
                        />
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
