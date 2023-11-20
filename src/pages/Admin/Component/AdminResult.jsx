import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
const AdminResult = () => {
  const [eye, setEye] = useState({});
  const data = [
    {
      id: 1,
      course_name: "Computer Science",
      batch_number: "CS2023",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
    },
    {
      id: 2,
      course_name: "Electrical Engineering",
      batch_number: "EE2023",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
    },
    {
      id: 3,
      course_name: "Mechanical Engineering",
      batch_number: "ME2023",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
    },
    // Add more results as needed
  ];
  const datahandler = (id) => {
    const singleItem = data?.find((item) => item?.id === id);
    setEye(singleItem);
  };
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
              {data?.map((item, i) => (
                <>
                  <tr key={i}>
                    <td className="border p-2 font-bold">
                      <p>{i + 1}</p>
                    </td>
                    <td className="border p-2">{item?.course_name}</td>
                    <td className="border p-2">{item?.batch_number}</td>
                    <td className="border p-2 font-bold">
                      <img
                        className="w-full h-32"
                        src={item?.image_url}
                        alt=""
                      />
                    </td>
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
