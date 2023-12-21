/* eslint-disable react/prop-types */
import { useState } from "react";
// import { formDataRequest } from "../requestMethod";
// import Swal from "sweetalert2";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import {
  useAddNoticeMutation,
  useUpdateNoticeMutation,
} from "../redux/features/notice/noticeApi";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const DraggableImageInput = () => {
  const [addNotice] = useAddNoticeMutation();
  const [updateNotice] = useUpdateNoticeMutation();
  const navigate = useNavigate();
  const location = useLocation();

  const { state } = location;
  const {
    title: defaultTitle,
    desc: defaultDesc,
    file: defaultFile,
    _id: noticeId,
  } = state?.item || {};

  const [image, setImage] = useState(null);
  const [uploadimg, setUpLoadimg] = useState(null);
  const [title, setTitle] = useState(defaultTitle ? defaultTitle : "");
  const [desc, setDesc] = useState(defaultDesc ? defaultDesc : "");

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
    title && formData.append("title", title);
    desc && formData.append("desc", desc);
    try {
      if (state?.editMode) {
        const res = await updateNotice({
          noticeId,
          noticeData: formData,
        }).unwrap();
        if (res.statusCode === 200) {
          toast.success("Notice updated successfully");
          navigate("/admin/notice");
        }
      } else {
        const res = await addNotice(formData).unwrap();
        if (res.statusCode === 200) {
          toast.success("Notice added successfully");
          navigate("/admin/notice");
        }
      }
    } catch (error) {
      toast.error("Fail to add notice");
    }
  };

  return (
    <>
      <div className=" ml-4 mt-4 bg-white p-3 shadow-lg lg:mr-20 rounded-lg mr-5">
        <h1 className="text-xl font-bold">Add Notice</h1>
      </div>
      <div className="lg:flex items-center justify-center lg:h-[75vh] h-[65vh] mt-7 ml-4 lg:mt-4 bg-white  shadow-lg lg:mr-20 mr-5 rounded-lg ">
        <div
          className="lg:h-[30vh] h-[20vh] lg:w-[40%] px-2 lg:px-auto border-2 border-dashed lg:mt-[-100px] border-gray-400 rounded-lg p-2 text-center"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {defaultFile && !image ? (
            <img
              src={`${
                import.meta.env.VITE_APP_IMAGE_URL
              }/notices/${defaultFile}`}
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
        <form className="ml-6 mt-[-5px] " onSubmit={handleSubmit}>
          <div className="mb-12">
            <label
              htmlFor="imageInput"
              className=" relative top-9 p-2 px-4 bg-primary  cursor-pointer  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md font-semibold text-white"
            >
              Upload Image
            </label>
          </div>
          <div className="flex flex-col gap-y-2 w-[400px]">
            <label className="text-lg font-semibold mt-2">Title</label>
            <input
              className="outline-none border bordered-2 rounded-md p-2 bg-slate-100 text-black"
              placeholder="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-y-2 w-full">
            <label className="text-lg font-semibold mt-4"> Description</label>
            <textarea
              className="outline-none border bordered-2 rounded-md p-2 resize-none w-full h-[100px] bg-slate-100 text-black"
              placeholder="description "
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          {title && desc ? (
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
  );
};

export default DraggableImageInput;
