import { useState } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useAddImageMutation } from "../../redux/features/gallery/galleryApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ImageForm = () => {
  const [addImage] = useAddImageMutation();
  const [image, setImage] = useState(null);
  const [uploadimg, setUpLoadimg] = useState(null);

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
    formData.append("image", uploadimg);
    try {
      const result = await addImage(formData).unwrap();
      if (result.statusCode === 200) {
        toast.success("Image added successfully");
        navigate("/admin/image");
      }
    } catch (error) {
      toast.error("Fail to add image");
    }
  };
  return (
    <div className="">
      <div className=" ml-4 mt-4 bg-white p-3 shadow-lg mr-20 rounded-lg">
        <h1 className="text-xl font-bold">Add Image</h1>
      </div>
      <div className=" ml-4 pt-5 pb-5 flex gap-3 mr-20 mt-5 bg-white shadow-lg   ps-10">
        <div
          className="lg:h-[50vh] h-[30vh] w-[60%] border-2 border-dashed border-gray-400 rounded-lg p-2 text-center"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {image ? (
            <img
              src={image}
              alt="Uploaded"
              className="   lg:h-[45vh] h-[40vh] w-[60vw] object-contain"
            />
          ) : (
            <div>
              <AddPhotoAlternateIcon style={{ fontSize: "250px" }} />
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
        {!uploadimg ? (
          <label
            htmlFor="imageInput"
            className=" relative text-center flex items-center p-2 px-4 bg-primary  cursor-pointer  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md font-semibold text-white w-36 h-12"
          >
            Upload Image
          </label>
        ) : (
          <button
            onClick={handleSubmit}
            className="relative p-2 px-4 bg-primary  cursor-pointer  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md font-semibold text-white w-32 h-12"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageForm;
