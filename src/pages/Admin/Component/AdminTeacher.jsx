import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  useDeleteTeacherMutation,
  useGetTeacherQuery,
} from "../../../redux/features/teacher/teacherApi";
import Loader from "../../../components/Loader/Loader";

const AdminTeacher = () => {
  const { data: teacherData, isLoading, refetch } = useGetTeacherQuery();
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
      refetch();
    } catch (error) {
      toast.error("Fail to delete");
    }
  };

  const navigate = useNavigate();

  const handleEditClick = (item) => {
    navigate("/admin/teacherForm", { state: { editMode: true, item } });
  };

  if (isLoading)
    return (
      <div>
        {" "}
        <Loader type={"List"} />
      </div>
    );

  return (
    <div>
      <div>
        <div className="me-20 ps-5 mt-4  ">
          <Link
            className="  shadow-md top-2 z p-2 px-4 bg-primary  cursor-pointer  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md font-semibold text-white"
            to="/admin/teacherForm"
          >
            Add New Teacher
          </Link>
          <table className="w-full border-collapse border overflow-x-scroll mt-3 shadow-lg">
            <thead>
              <tr className=" bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                <th className="border p-2">Teacher ID</th>
                <th className="border p-2">Teacher </th>
                <th className="border p-2">Designation</th>
                <th className="border p-2">Department</th>
                <th className="border p-2">Action</th>
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
                      <td className="border p-2 text-center">
                        <div className="dropdown">
                          <div tabIndex={0} role="button" className=" ">
                            {" "}
                            <MoreVertIcon />
                          </div>
                          <ul
                            tabIndex={0}
                            className="dropdown-content z-[1] menu px-3 py-4 shadow-lg bg-base-100 rounded-md ms-[-30px]"
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
            <div className="flex justify-center gap-4 items-center">
              <img
                className="  h-38 w-48 rounded-lg border-2 border-cyan-400"
                src={`${import.meta.env.VITE_APP_IMAGE_URL}/teachers/${
                  eye?.image
                }`}
                alt=""
              />
              <div>
                <p className="my-2">
                  <span className=" font-bold">ID:</span> {eye?.teacherId}
                </p>
                <p>
                  <span className=" font-bold">Name:</span> {eye?.name}
                </p>
                <p className="my-2">
                  <span className=" font-bold">Designation:</span>{" "}
                  {eye?.designation}
                </p>
                <p>
                  <span className=" font-bold">Department:</span>{" "}
                  {eye?.department}
                </p>
              </div>
            </div>
            <p className="my-5 text-justify ">
              <span className=" font-bold">About:</span> {eye?.about}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTeacher;
