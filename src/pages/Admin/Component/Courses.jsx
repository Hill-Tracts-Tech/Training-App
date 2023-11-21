import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
const AdminCourses = () => {
  const [eye, setEye] = useState({});
  const data = [
    {
      id: 1,
      name: "John Smith",
      title: "Office Application",
      price: 5000,
      duration: "6 Month",
      image_url:
        "https://www.shareicon.net/data/512x512/2016/07/26/802026_man_512x512.png",
      teacher_id: "T001",
      department: "CS",
    },
    {
      id: 2,
      name: "Emily Johnson",
      title: "Office Application",
      price: 5000,
      duration: "6 Month",
      image_url:
        "https://www.shareicon.net/data/512x512/2016/07/26/802026_man_512x512.png",
      teacher_id: "T002",
      department: "EE",
    },
    {
      id: 3,
      name: "Robert Davis",
      title: "Office Application",
      price: 5000,
      duration: "6 Month",
      image_url:
        "https://www.shareicon.net/data/512x512/2016/07/26/802026_man_512x512.png",
      teacher_id: "T003",
      department: "CE",
    },
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
            to="/admin/courseForm"
          >
            Add New Course
          </Link>
          <table className="w-full border-collapse border overflow-x-scroll mt-5 shadow-lg">
            <thead>
              <tr className=" bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                <th className="border p-2">Course ID</th>
                <th className="border p-2">Image </th>
                <th className="border p-2">Instructor</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Title</th>
                <th className="border p-2">Duration</th>
                <th className="border p-2 ">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, i) => (
                <>
                  <tr key={i}>
                    <td className="border p-2">{item?.teacher_id}</td>
                    <td className="border p-2 font-bold">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item?.image_url}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </td>
                    <td className="border p-2">{item?.name}</td>
                    <td className="border p-2">{item?.price}</td>
                    <td className="border p-2">{item?.title}</td>
                    <td className="border p-2">{item?.duration}</td>
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
            <div className="flex justify-center gap-4">
              <img
                className="  h-38 w-48 rounded-full "
                src={eye?.image_url}
                alt=""
              />
              <div>
                <p className="my-3">
                  <span className=" font-bold">ID:</span> {eye?.teacher_id}
                </p>
                <p>
                  <span className=" font-bold">Name:</span> {eye?.name}
                </p>
                <p className="my-3">
                  <span className=" font-bold">Designation:</span> {eye?.price}
                </p>
                <p>
                  <span className=" font-bold">Title:</span> {eye?.title}
                </p>
                <p className="my-3">
                  <span className=" font-bold">Duration:</span> {eye?.duration}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCourses;
