/* eslint-disable react/prop-types */
import { useState } from "react";
// import { formDataRequest } from "../requestMethod";
// import Swal from "sweetalert2";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";

const CourseForm = () => {
  const [image, setImage] = useState(null);
  const [uploadimg, setUpLoadimg] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [teacher_id, setTeacher_id] = useState("");

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
    formData.append("prescription", uploadimg);
    console.log("Form data", name, teacher_id, age, department, designation);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    // formData.append("user", currentUser?._id);
    formData.append("prescription", uploadimg);
    console.log("Form data", name, teacher_id, age, department, designation);
    // formDataRequest.post(`/prescription/add-prescription`, formData);
    // Swal.fire({
    //   title: "Prescription Uploaded Successfully",
    //   icon: "success",
    //   confirmButtonColor: "#3CBD96 ",
    // });

    setImage(null);
  };

  // module logic
  const [modules, setModules] = useState([]);

  const addModule = () => {
    const newModule = {
      title: "",
      desc: "",
    };
    setModules([...modules, newModule]);
  };

  const removeModule = (indexToRemove) => {
    const updatedModules = modules.filter(
      (_, index) => index !== indexToRemove
    );
    setModules(updatedModules);
  };

  const handleTitleChange = (event, index) => {
    const updatedModules = [...modules];
    updatedModules[index].title = event.target.value;
    setModules(updatedModules);
  };

  const handleDescChange = (event, index) => {
    const updatedModules = [...modules];
    updatedModules[index].desc = event.target.value;
    setModules(updatedModules);
  };
  return (
    <div>
      <>
        <div className=" ml-4 mt-4 bg-white p-3 shadow-lg lg:mr-20 rounded-lg mr-5">
          <h1 className="text-xl font-bold">Add New Course</h1>
        </div>
        <div className="p-8 ml-4 lg:mt-4 bg-white  shadow-lg lg:mr-20 mr-5 rounded-lg ">
          <div
            className="px-2 lg:px-auto border-2 border-dashed border-gray-400 rounded-lg p-2 text-center"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            {image ? (
              <img
                src={image}
                alt="Uploaded"
                className="lg:h-[25vh] h-[30vh] w-[100%] object-contain"
              />
            ) : (
              <div>
                <AddPhotoAlternateIcon style={{ fontSize: "150px" }} />
              </div>
            )}
          </div>
          <form className="mt-9" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-y-2">
                <label className="text-lg font-semibold mt-2">
                  Upload Thumbnail
                </label>
                <input
                  type="file"
                  id="imageInput"
                  className="outline-none border bordered-2 rounded-md p-[6px]"
                  accept="image/*"
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
                <label className="text-lg font-semibold mt-2">
                  Course Title
                </label>
                <input
                  className="outline-none border bordered-2 rounded-md p-2"
                  placeholder="course title"
                  type="text"
                  name="title"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label className="text-lg font-semibold mt-2">Instructor</label>
                <input
                  className="outline-none border bordered-2 rounded-md p-2"
                  placeholder="instructor"
                  type="text"
                  name="instructor"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                />
                {/* Additional fields */}
              </div>

              <div className="flex flex-col gap-y-2">
                <label className="text-lg font-semibold mt-2">
                  Description
                </label>
                <input
                  className="outline-none border bordered-2 rounded-md p-2"
                  placeholder="description"
                  type="text"
                  name="desc"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                />
                <label className="text-lg font-semibold mt-2">Price</label>
                <input
                  className="outline-none border bordered-2 rounded-md p-2"
                  placeholder="price"
                  type="number"
                  name="price"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
                <label className="text-lg font-semibold mt-2">
                  Course Duration
                </label>
                <input
                  className="outline-none border bordered-2 rounded-md p-2"
                  placeholder="course duration"
                  type="text"
                  name="duration"
                  value={teacher_id}
                  onChange={(e) => setTeacher_id(e.target.value)}
                />
              </div>
            </div>

            {/* Module inputs */}
            {modules.map((module, index) => (
              <div
                key={index}
                className="mt-4 grid grid-cols-2 gap-4 shadow-lg py-5 rounded-sm"
              >
                <button
                  className="absolute right-[125px] bg-white shadow-md rounded-full text-black p-1 hover:bg-blue-400 hover:text-white transition-all"
                  onClick={() => removeModule(index)}
                >
                  <CloseIcon />
                </button>
                <div className="flex flex-col gap-y-2">
                  <label
                    htmlFor={`title-${index}`}
                    className="text-lg font-semibold mt-2"
                  >
                    Title
                  </label>
                  <input
                    className="outline-none border bordered-2 rounded-md p-2 h-[65px]"
                    placeholder="module title"
                    type="text"
                    name="title"
                    value={module.title}
                    id={`title-${index}`}
                    onChange={(e) => handleTitleChange(e, index)}
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <label
                    htmlFor={`desc-${index}`}
                    className="text-lg font-semibold mt-2"
                  >
                    Description
                  </label>
                  <textarea
                    className="outline-none border bordered-2 rounded-md p-2"
                    placeholder="module description"
                    type="text"
                    name="description"
                    id={`desc-${index}`}
                    value={module.desc}
                    onChange={(e) => handleDescChange(e, index)}
                  />
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center mt-24">
              <button
                className="p-2 px-4 bg-primary cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md font-semibold text-white"
                onClick={addModule}
              >
                + Add Module
              </button>
              <button className="p-2 px-4 cursor-pointer bg-gray-500 rounded-md font-semibold text-white">
                Send
              </button>
            </div>
          </form>
        </div>
      </>
    </div>
  );
};

export default CourseForm;
