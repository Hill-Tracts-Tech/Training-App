import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link, useNavigate } from "react-router-dom";
import {
  useDeleteCourseMutation,
  useGetCoursesQuery,
} from "../../../redux/features/course/courseApi";
import toast from "react-hot-toast";

import Loader from "../../../components/Loader/Loader";
import { useAuth } from "../../../context/useAuth";

const AdminCourses = () => {
  const { setActiveZ } = useAuth();
  const { data: courses, isLoading, refetch } = useGetCoursesQuery();
  const [deleteCourse] = useDeleteCourseMutation();
  const [eye, setEye] = useState({});

  const datahandler = (id) => {
    const singleItem = courses?.data?.find((item) => item?._id === id);
    setEye(singleItem);
  };

  const handleDelete = async (courseId) => {
    try {
      await deleteCourse(courseId);
      toast.success("Course deleted successfully");
      refetch();
    } catch (error) {
      toast.error(error);
    }
  };

  const navigate = useNavigate();

  const handleEditClick = (item) => {
    navigate("/admin/courseForm", { state: { editMode: true, item } });
  };

  if (isLoading)
    return (
      <div className="">
        <Loader type={"List"} />
      </div>
    );

  return (
    <div>
      <div>
        <div className="me-20 ps-5 mt-4">
          <Link
            className=" shadow-md top-2 p-2 px-4   cursor-pointer  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md font-semibold text-white"
            to="/admin/courseForm"
          >
            Add New Course
          </Link>

          <table className="w-full border-collapse border overflow-x-scroll mt-3 shadow-lg">
            <thead>
              <tr className=" bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                <th className="border p-2">Title</th>
                <th className="border p-2">Thumbnail</th>
                <th className="border p-2">Instructor</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Duration</th>
                <th className="border p-2 ">Action</th>
              </tr>
            </thead>
            <tbody>
              {courses?.data?.map((item, i) => (
                <>
                  <tr key={i}>
                    <td className="border p-2 text-center">{item?.title}</td>
                    <td className="border p-2 text-center font-bold">
                      <div className="w-20 h-12">
                        <img
                          src={`${import.meta.env.VITE_APP_IMAGE_URL}/courses/${
                            item?.image
                          }`}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </td>
                    <td className="border p-2 text-center flex items-center gap-6">
                      <div className="mask mask-squircle w-12 h-12 ">
                        <img
                          src={`${
                            import.meta.env.VITE_APP_IMAGE_URL
                          }/teachers/${item?.instructor?.image}`}
                          alt="Avatar Tailwind CSS Component"
                        />{" "}
                      </div>
                      <span>{item?.instructor?.name}</span>
                    </td>
                    <td className="border p-2 text-center">{item?.price}</td>
                    <td className="border p-2 text-center">{item?.duration}</td>
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
            <div className="flex justify-center gap-4">
              <img
                className="h-38 w-48 "
                src={`${import.meta.env.VITE_APP_IMAGE_URL}/courses/${
                  eye?.image
                }`}
                alt=""
              />
              <div>
                <p className="my-3">
                  <span className=" font-bold">Title:</span> {eye?.title}
                </p>
                <p>
                  <span className=" font-bold">Instructor:</span>{" "}
                  {eye?.instructor?.name}
                </p>
                <p className="my-3">
                  <span className=" font-bold">Duration:</span> {eye?.duration}
                </p>
                <p>
                  <span className=" font-bold">Price:</span> {eye?.price}
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
