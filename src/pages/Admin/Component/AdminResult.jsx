import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useGetResultQuery } from "../../../redux/features/result/resultApi";

const AdminResult = () => {
  const { data: resultData, isLoading } = useGetResultQuery();
  const [eye, setEye] = useState({});

  const datahandler = (id) => {
    const singleItem = resultData?.data?.find((item) => item?._id === id);
    setEye(singleItem);
  };

  // file identified
  const isPDF = (fileName) => {
    return fileName.toLowerCase().endsWith(".pdf");
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div>
        <div className="me-20 ps-5 mt-4">
          <Link
            className="relative shadow-lg top-2 z p-2 px-4 bg-primary  cursor-pointer  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md font-semibold text-white"
            to="/admin/ResultForm"
          >
            Add Result
          </Link>
          <table className="w-full border-collapse border overflow-x-scroll mt-5 shadow-lg">
            <thead>
              <tr className=" bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                <th className="border p-2">NO</th>
                <th className="border p-2">Course Name</th>
                <th className="border p-2"> Batch Number</th>
                <th className="border p-2">Image/PDF </th>
                <th className="border p-2 ">Action</th>
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
                      {item?.courseName}
                    </td>
                    <td className="border p-2 text-center">{item?.batchNo}</td>
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
                      <div className="flex justify-center gap-3 items-center">
                        <label
                          htmlFor="my_modal_5"
                          className="hover:text-blue-500"
                          onClick={() => datahandler(item?._id)}
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
                  src={eye?.image_url}
                  alt=""
                />
                <p className="my-3">
                  <span className=" font-bold">Batch No:</span>{" "}
                  {eye?.batch_number}
                </p>
                <p>
                  <span className=" font-bold">Course Name:</span>{" "}
                  {eye?.course_name}
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
