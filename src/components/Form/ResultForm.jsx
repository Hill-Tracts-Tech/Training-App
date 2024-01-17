import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useAddResultMutation,
  useGetResultQuery,
  useUpdateResultMutation,
} from "../../redux/features/result/resultApi";
import { useGetCoursesQuery } from "../../redux/features/course/courseApi";
import { useGetAllBatchQuery } from "../../redux/features/batch/batchApi";
const ResultForm = () => {
  const [addResult] = useAddResultMutation();
  const { refetch } = useGetResultQuery();
  const { data: courseData } = useGetCoursesQuery();
  const { data: batchData } = useGetAllBatchQuery();
  const [updateResult] = useUpdateResultMutation();
  const [image, setImage] = useState(null);
  const [uploadimg, setUpLoadimg] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const {
    courseName: defaultCourse,
    batchNo: defaultBatchNo,
    file: defaultFile,
    _id: resultId,
  } = state?.item || {};
  const [course, setCourse] = useState(defaultCourse ? defaultCourse : "");
  const [batchNo, setBatchNo] = useState(defaultBatchNo ? defaultBatchNo : "");
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    uploadimg && formData.append("file", uploadimg);
    course && formData.append("courseName", course);
    batchNo && formData.append("batchNo", batchNo);
    console.log(batchNo);
    try {
      if (state?.editMode) {
        const res = await updateResult({
          resultId,
          resultData: formData,
        }).unwrap();
        if (res.statusCode === 200) {
          toast.success("Result updated Successfully");
          refetch();
          navigate("/admin/result");
        }
      } else {
        const res = await addResult(formData).unwrap();
        if (res.statusCode === 200) {
          toast.success("Result Published Successfully");
          refetch();
          navigate("/admin/result");
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
            {state?.editMode ? "Update" : "Add"} Result
          </h1>
        </div>
        <div className="flex  items-center justify-center h-[75vh] ml-4 mt-4 bg-white  shadow-lg mr-20 rounded-lg ">
          <div
            className="lg:h-[30vh] h-[40vh] w-[40%] border-2 border-dashed mt-[-100px] border-gray-400 rounded-lg p-2 text-center"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            {defaultFile && !image ? (
              <img
                src={`${
                  import.meta.env.VITE_APP_IMAGE_URL
                }/result/${defaultFile}`}
                alt="Uploaded"
                className="   lg:h-[25vh] h-[30vh] w-[30vw] object-contain"
              />
            ) : image ? (
              <img
                src={image}
                alt="Uploaded"
                className="   lg:h-[25vh] h-[30vh] w-[30vw] object-contain"
              />
            ) : (
              <div>
                <AddPhotoAlternateIcon style={{ fontSize: "150px" }} />
                <p className="text-xl text-slate-400 mt-[-10px]">
                  Drag or Upload
                </p>
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
          <form className="ml-6 mt-[-52px] " onSubmit={handleSubmit}>
            <div className="mb-12">
              <label
                htmlFor="imageInput"
                className=" relative top-9 p-2 px-4 bg-primary  cursor-pointer  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md font-semibold text-white"
              >
                Upload Image
              </label>
            </div>
            <div className="flex flex-col gap-y-2 w-[400px]">
              <label className="text-lg font-semibold mt-2">
                Course Name :
              </label>
              {/* <input
                className="outline-none border bordered-2 rounded-md p-2 bg-slate-100 text-black"
                placeholder="course name "
                type="text"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              /> */}
              <select
                className="outline-none border bordered-2 rounded-md p-2 bg-slate-100 text-black "
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              >
                <option selected disabled value="MS office">
                  Select course
                </option>
                {courseData?.data?.map((course) => (
                  <option key={course._id} value={course._id}>
                    {course?.title} - {course?.duration}{" "}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-y-2 w-full">
              <label className="text-lg font-semibold mt-4">
                {" "}
                Batch NO/Name:
              </label>
              {/* <input
                className="outline-none border bordered-2 rounded-md p-2 bg-slate-100 text-black"
                placeholder="EE23-16 "
                type="text"
                value={batchNo}
                onChange={(e) => setBatchNo(e.target.value)}
              /> */}
              <select
                className="outline-none border bordered-2 rounded-md p-2 bg-slate-100 text-black"
                value={batchNo}
                onChange={(e) => setBatchNo(e.target.value)}
              >
                <option selected value="@">
                  Select batch
                </option>
                {batchData?.data?.map((batch) => (
                  <option key={batch._id} value={batch._id}>
                    {batch?.batchName}
                  </option>
                ))}
              </select>
            </div>
            {course && batchNo ? (
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

export default ResultForm;
