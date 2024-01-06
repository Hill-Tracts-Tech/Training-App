import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useAddBatchMutation,
  useGetAllBatchQuery,
  useUpdateBatchMutation,
} from "../../redux/features/batch/batchApi";

const BatchForm = () => {
  const [addBatch] = useAddBatchMutation();
  const { refetch } = useGetAllBatchQuery();
  const [updateBatch] = useUpdateBatchMutation();

  const location = useLocation();
  const { state } = location;

  const {
    batchName: defaultBatchName,
    batchNo: defaultBatchNo,
    about: defaultAbout,
    totalStudent: defaultTotalStudent,
    _id: batchId,
  } = state?.item || {};

  const [batchName, setBatchName] = useState(
    defaultBatchName ? defaultBatchName : ""
  );
  const [batchNo, setBatchNo] = useState(defaultBatchNo ? defaultBatchNo : "");
  const [about, setAbout] = useState(defaultAbout ? defaultAbout : "");
  const [totalStudent, setTotalStudent] = useState(
    defaultTotalStudent ? defaultTotalStudent : null
  );

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      batchName,
      batchNo,
      about,
      totalStudent,
    };
    try {
      if (state?.editMode) {
        const res = await updateBatch({
          batchId,
          batchData: data,
        }).unwrap();
        if (res.statusCode === 200) {
          toast.success("Batch updated successfully");
          refetch();
          navigate("/admin/batch");
        }
      } else {
        const res = await addBatch(data).unwrap();
        if (res.statusCode === 200) {
          toast.success("Batch uploaded successfully");
          refetch();
          navigate("/admin/batch");
        }
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div>
      <>
        <div className=" ml-4 mt-4 bg-white p-3 shadow-lg mr-20 rounded-lg">
          <h1 className="text-xl font-bold">
            {state?.editMode ? "Update" : "Add"} Batch
          </h1>
        </div>
        <div className="flex  items-center justify-center h-[75vh] ml-4 mt-4 bg-white  shadow-lg mr-20 rounded-lg ">
          <form className="ml-6 mt-[-52px] " onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-2 w-[400px]">
              <label className="text-lg font-semibold mt-2">Batch Name</label>
              <input
                className="outline-none border bordered-2 rounded-md p-2 bg-slate-100 text-black"
                placeholder="Batch Name"
                type="text"
                value={batchName}
                onChange={(e) => setBatchName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-y-2 w-[400px]">
              <label className="text-lg font-semibold mt-2">Batch Number</label>
              <input
                className="outline-none border bordered-2 rounded-md p-2 bg-slate-100 text-black"
                placeholder="Batch Number"
                type="text"
                value={batchNo}
                onChange={(e) => setBatchNo(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-y-2 w-[400px]">
              <label className="text-lg font-semibold mt-2">
                Total Student
              </label>
              <input
                className="outline-none border bordered-2 rounded-md p-2 bg-slate-100 text-black"
                placeholder="Total Student"
                type="number"
                value={totalStudent}
                onChange={(e) => setTotalStudent(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-y-2 w-full">
              <label className="text-lg font-semibold mt-4"> About</label>
              <input
                className="outline-none border bordered-2 rounded-md p-2 bg-slate-100 text-black"
                placeholder="description"
                type="text"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            </div>
            {batchName && batchNo ? (
              <>
                {" "}
                <button
                  onClick={handleSubmit}
                  className=" relative top-9 p-2 px-4 bg-primary lg:w-32 cursor-pointer  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md font-semibold text-white"
                >
                  Submit
                </button>
              </>
            ) : (
              <>
                <button className="relative top-9 p-2 px-4  lg:w-32 cursor-pointer   bg-gray-500 rounded-md font-semibold text-white">
                  Send
                </button>
              </>
            )}
          </form>
        </div>
      </>
    </div>
  );
};

export default BatchForm;
