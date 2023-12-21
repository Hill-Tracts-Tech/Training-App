import { useState } from "react";
import toast from "react-hot-toast";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";
import { useAddCourseMutation } from "../../redux/features/course/courseApi";
import { useGetTeacherQuery } from "../../redux/features/teacher/teacherApi";
import { useNavigate } from "react-router-dom";

const CourseForm = () => {
  const [addCourse] = useAddCourseMutation();
  const { data: teachers } = useGetTeacherQuery();
  const [image, setImage] = useState(null);
  const [uploadimg, setUpLoadimg] = useState(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [instructor, setInstructor] = useState("");
  const [duration, setDuration] = useState("");

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
    formData.append("desc", description);
    formData.append("title", title);
    formData.append("price", price);
    formData.append("duration", duration);
    formData.append("instructor", instructor);
    formData.append("module", JSON.stringify(modules));

    try {
      const res = await addCourse(formData).unwrap();
      if (res.statusCode === 200) {
        toast.success("Course added successfully");
        navigate("/admin/course");
      }
    } catch (error) {
      toast.error(error);
    }
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

  const courseDuration = [
    {
      id: 1,
      value: "3 month",
    },
    {
      id: 2,
      value: "6 month",
    },
    {
      id: 3,
      value: "1 year",
    },
    {
      id: 4,
      value: "2 year",
    },
    {
      id: 5,
      value: "4 year",
    },
  ];

  return (
    <div>
      <>
        <div className=" ml-4 mt-4 bg-white p-3 shadow-lg lg:mr-20 rounded-lg mr-5">
          <h1 className="text-xl font-bold">Add New Course</h1>
        </div>
        <div className="p-8 ml-4 lg:mt-4 bg-white  shadow-lg lg:mr-20 mr-5 rounded-lg ">
          <div
            className="px-2 lg:px-auto border-2 border-dashed border-gray-400 rounded-lg p-2 text-center w-[250px]"
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
                  className="outline-none border bordered-2 rounded-md p-[6px] bg-slate-100 text-black"
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
                  Description
                </label>
                <input
                  className="outline-none border bordered-2 rounded-md p-2 bg-slate-100 text-black"
                  placeholder="description"
                  type="text"
                  name="desc"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <label className="text-lg font-semibold mt-2">Instructor</label>
                <select
                  className="outline-none border bordered-2 rounded-md p-2 bg-slate-100 text-black"
                  value={instructor}
                  onChange={(e) => setInstructor(e.target.value)}
                >
                  <option value="">Select an instructor</option>
                  {teachers?.data?.map((teacher) => (
                    <option key={teacher._id} value={teacher._id}>
                      {teacher.name}{" "}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-y-2">
                <label className="text-lg font-semibold mt-2">
                  Course Title
                </label>
                <input
                  className="outline-none border bordered-2 rounded-md p-2 bg-slate-100 text-black"
                  placeholder="course title"
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <label className="text-lg font-semibold mt-2">Price</label>
                <input
                  className="outline-none border bordered-2 rounded-md p-2 bg-slate-100 text-black"
                  placeholder="price"
                  type="number"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <label className="text-lg font-semibold mt-2">
                  Course Duration
                </label>
                <select
                  className="outline-none border bordered-2 rounded-md p-2 bg-slate-100 text-black"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                >
                  <option value="">Select duration</option>
                  {courseDuration?.map((course) => (
                    <option key={course.id} value={course.value}>
                      {course.value}{" "}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Module inputs */}
            {modules.map((module, index) => (
              <div key={index} className="mt-4 grid grid-cols-2 gap-4">
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
                    className="outline-none border bordered-2 rounded-md p-2 bg-slate-100 text-black"
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
                    className="outline-none border bordered-2 rounded-md p-2 bg-slate-100 text-black"
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
              <div
                className="p-2 px-4 bg-primary cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md font-semibold text-white"
                onClick={addModule}
              >
                + Add Module
              </div>
              <button className="p-2 px-4 bg-primary bg-gradient-to-r cursor-pointer from-cyan-500 to-blue-500 rounded-md font-semibold text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    </div>
  );
};

export default CourseForm;
