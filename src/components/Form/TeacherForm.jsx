import { useState } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAddTeacherMutation } from "../../redux/features/teacher/teacherApi";

const TeacherForm = () => {
  const [addTeacher] = useAddTeacherMutation();
  const [image, setImage] = useState(null);
  const [uploadimg, setUpLoadimg] = useState(null);
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [teacher_id, setTeacher_id] = useState("");

  const navigate = useNavigate();

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", uploadimg);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", uploadimg);
    formData.append("name", name);
    formData.append("about", about);
    formData.append("designation", designation);
    formData.append("department", department);
    formData.append("teacherId", teacher_id);
    try {
      await addTeacher(formData);
      toast.success("Teacher added successfully");
      navigate("/admin/teacher");
    } catch (error) {
      toast.error("Can't add teacher");
    }
  };

  return (
    <div>
      <div className=" ml-4 mt-4 bg-white p-3 shadow-lg lg:mr-20 rounded-lg mr-5">
        <h1 className="text-xl font-bold">Add New Teacher</h1>
      </div>
      <div className="lg:flex items-center justify-center lg:h-[98vh] h-[65vh] mt-7 ml-4 lg:mt-4 bg-white  shadow-lg lg:mr-20 mr-5 rounded-lg ">
        <div
          className="lg:h-[30vh] h-[20vh] lg:w-[40%] px-2 lg:px-auto border-2 border-dashed lg:mt-[-310px]  border-gray-400 rounded-lg p-2 text-center"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {image ? (
            <img
              src={image}
              alt="Uploaded"
              className="   lg:h-[25vh] h-[30vh] w-[30vw] object-contain"
            />
          ) : (
            <div>
              <AddPhotoAlternateIcon style={{ fontSize: "150px" }} />
            </div>
          )}
        </div>
        <input
          type="file"
          id="imageInput"
          accept="image/*"
          style={{ display: "none" }}
          onChange={(e) => {
            const file = e.target.files[0];
            setUpLoadimg(file);
            if (file && file.type.startsWith("image/")) {
              const reader = new FileReader();
              reader.onload = () => {
                setImage(reader.result);
              };
              reader.readAsDataURL(file);
            }
          }}
        />
        <form className="ml-6 mt-[-20px] " onSubmit={handleSubmit}>
          <div className="mb-12">
            <label
              htmlFor="imageInput"
              className=" relative top-9 p-2 px-4 bg-primary  cursor-pointer  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md font-semibold text-white"
            >
              Upload Image
            </label>
          </div>
          <div className="flex flex-col gap-y-2 w-[400px]">
            <label className="text-lg font-semibold mt-2">Teacher ID :</label>
            <input
              className="outline-none border bordered-2 rounded-md p-2 bg-slate-100"
              placeholder="Teacher_id"
              type="text"
              value={teacher_id}
              onChange={(e) => setTeacher_id(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-y-2 w-[400px]">
            <label className="text-lg font-semibold mt-2">Teacher name :</label>
            <input
              className="outline-none border bordered-2 rounded-md p-2 bg-slate-100"
              placeholder="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-y-2 w-[400px]">
            <label className="text-lg font-semibold mt-2">Designation :</label>
            <input
              className="outline-none border bordered-2 rounded-md p-2 bg-slate-100"
              placeholder="designation"
              type="text"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-y-2 w-[400px]">
            <label className="text-lg font-semibold mt-2">Department :</label>
            <input
              className="outline-none border bordered-2 rounded-md p-2 bg-slate-100"
              placeholder="department"
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-y-2 w-[400px]">
            <label className="text-lg font-semibold mt-2">About</label>
            <input
              className="outline-none border bordered-2 rounded-md p-2 bg-slate-100"
              placeholder="about"
              type="text"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
          </div>

          {uploadimg &&
          name &&
          department &&
          designation &&
          about &&
          teacher_id ? (
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
    </div>
  );
};

export default TeacherForm;
