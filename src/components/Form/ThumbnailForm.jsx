import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useState } from "react";
import {
  useAddThumbnailMutation,
  useGetThumbnailsQuery,
  useUpdateThumbnailMutation,
} from "../../redux/features/thumbnail/thumbnailApi";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const ThumbnailForm = () => {
  const [addThumbnail] = useAddThumbnailMutation();
  const { refetch } = useGetThumbnailsQuery();
  const [updateThumbnail] = useUpdateThumbnailMutation();
  const [image, setImage] = useState(null);
  const [uploadimg, setUpLoadimg] = useState(null);

  const location = useLocation();
  const { state } = location;

  const {
    title: defaultTitle,
    desc: defaultDesc,
    image: defaultImage,
    _id: thumbnailId,
  } = state?.item || {};

  const [title, setTitle] = useState(defaultTitle ? defaultTitle : "");
  const [desc, setDesc] = useState(defaultDesc ? defaultDesc : "");

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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    uploadimg && formData.append("image", uploadimg);
    title && formData.append("title", title);
    desc && formData.append("desc", desc);

    try {
      if (state?.editMode) {
        const res = await updateThumbnail({
          thumbnailId,
          thumbnailData: formData,
        }).unwrap();
        if (res.statusCode === 200) {
          toast.success("Thumbnail updated successfully");
          refetch();
          navigate("/admin/thumbnail");
        }
      } else {
        const res = await addThumbnail(formData).unwrap();
        if (res.statusCode === 200) {
          toast.success("Thumbnail uploaded successfully");
          refetch();
          navigate("/admin/thumbnail");
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
            {state?.editMode ? "Update" : "Add"} Thumbnail
          </h1>
        </div>
        <div className="flex  items-center justify-center h-[75vh] ml-4 mt-4 bg-white  shadow-lg mr-20 rounded-lg ">
          <div
            className="lg:h-[30vh] h-[40vh] w-[40%] border-2 border-dashed mt-[-100px] border-gray-400 rounded-lg p-2 text-center"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            {defaultImage && !image ? (
              <img
                src={`${
                  import.meta.env.VITE_APP_IMAGE_URL
                }/banners/${defaultImage}`}
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
              <label className="text-lg font-semibold mt-2">Title:</label>
              <input
                className="outline-none border bordered-2 rounded-md p-2 bg-slate-100 text-black"
                placeholder="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-y-2 w-full">
              <label className="text-lg font-semibold mt-4">
                {" "}
                Description:
              </label>
              <input
                className="outline-none border bordered-2 rounded-md p-2 bg-slate-100 text-black"
                placeholder="description"
                type="text"
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
    </div>
  );
};

export default ThumbnailForm;
