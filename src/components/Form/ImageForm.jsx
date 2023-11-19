import { useState } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const ImageForm = () => {
  const [image, setImage] = useState(null);
  const [uploadimg, setUpLoadimg] = useState(null);
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
    // formData.append("user", currentUser?._id);
    formData.append("prescription", uploadimg);
    console.log("Form data", formData);
    // formDataRequest.post(`/prescription/add-prescription`, formData);
    // Swal.fire({
    //   title: "Prescription Uploaded Successfully",
    //   icon: "success",
    //   confirmButtonColor: "#3CBD96 ",
    // });
    document.getElementById("my_modal_1").click();
    setImage(null);
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
