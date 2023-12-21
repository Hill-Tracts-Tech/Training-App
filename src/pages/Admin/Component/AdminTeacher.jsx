import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import {
  useDeleteTeacherMutation,
  useGetTeacherQuery,
} from "../../../redux/features/teacher/teacherApi";

const AdminTeacher = () => {
  const { data: teacherData, isLoading } = useGetTeacherQuery();
  const [deleteTeacher] = useDeleteTeacherMutation();
  const [eye, setEye] = useState({});

  const datahandler = (id) => {
    const singleItem = teacherData?.data?.find((item) => item?._id === id);
    setEye(singleItem);
  };

  const handleDelete = async (teacherId) => {
    try {
      await deleteTeacher(teacherId);
      toast.success("Teacher Deleted Successfully");
    } catch (error) {
      toast.error("Fail to delete");
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div>
        <div className="me-20 ps-5 mt-4">
          <Link
            className="relative shadow-lg top-2 z p-2 px-4 bg-primary  cursor-pointer  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md font-semibold text-white"
            to="/admin/teacherForm"
          >
            Add New Teacher
          </Link>
          <table className="w-full border-collapse border overflow-x-scroll mt-5 shadow-lg">
            <thead>
              <tr className=" bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                <th className="border p-2">Teacher ID</th>
                <th className="border p-2">Teacher </th>
                <th className="border p-2">Designation</th>
                <th className="border p-2">Department</th>
                <th className="border p-2 ">Action</th>
              </tr>
            </thead>
            <tbody>
              {teacherData?.data.length > 0 &&
                teacherData?.data?.map((item, i) => (
                  <>
                    <tr key={i}>
                      <td className="border p-2 text-center">
                        {item?.teacherId}
                      </td>
                      <td className="border p-2 font-bold flex items-center gap-3">
                        <div className=" mask mask-squircle w-12 h-12">
                          <img
                            src={`${
                              import.meta.env.VITE_APP_IMAGE_URL
                            }/teachers/${item?.image}`}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                        <span>{item?.name}</span>
                      </td>
                      <td className="border p-2 text-center">
                        {item?.designation}
                      </td>
                      <td className="border p-2 text-center">
                        {item?.department}
                      </td>
                      <td className="border p-2">
                        <div className="flex justify-center gap-3 items-center">
                          <label
                            htmlFor="my_modal_5"
                            className="hover:text-blue-500  cursor-pointer"
                            onClick={() => datahandler(item?._id)}
                          >
                            <VisibilityIcon />
                          </label>
                          <DeleteIcon
                            className="text-red-400 hover:text-black  cursor-pointer"
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
            <div className="flex justify-center gap-4">
              <img
                className="  h-38 w-48 rounded-full "
                src={`${import.meta.env.VITE_APP_IMAGE_URL}/teachers/${
                  eye?.image
                }`}
                alt=""
              />
              <div>
                <p className="my-3">
                  <span className=" font-bold">ID:</span> {eye?.teacherId}
                </p>
                <p>
                  <span className=" font-bold">Name:</span> {eye?.name}
                </p>
                <p className="my-3">
                  <span className=" font-bold">Designation:</span>{" "}
                  {eye?.designation}
                </p>
                <p>
                  <span className=" font-bold">Department:</span>{" "}
                  {eye?.department}
                </p>
                <p className="my-3">
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

export default AdminTeacher;
