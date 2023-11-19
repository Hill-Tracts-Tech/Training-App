/* eslint-disable react/prop-types */
import { useState } from "react";
// import { formDataRequest } from "../requestMethod";
// import Swal from "sweetalert2";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
const DraggableImageInput = () => {
  const [image, setImage] = useState(null);
  const [uploadimg, setUpLoadimg] = useState(null);
  const [title, settitle] = useState("");

  const [message, setMessage] = useState("");
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
    console.log("Form data", title, message);
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
    <>
      <div className=" ml-4 mt-4 bg-white p-3 shadow-lg mr-20 rounded-lg">
        <h1 className="text-xl font-sans">Add News</h1>
      </div>
      <div className="flex  items-center justify-center h-[60vh] ml-4 mt-4 bg-white  shadow-lg mr-20 rounded-lg">
        <div
          className="lg:h-[30vh] h-[40vh] w-[40%] border-2 border-dashed border-gray-400 rounded-lg p-2 text-center"
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
        <form className="ml-6 pt-16" onSubmit={handleSubmit}>
          <div className="mb-12">
            <label
              htmlFor="imageInput"
              className=" relative top-9 p-2 px-4 bg-primary  cursor-pointer  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md font-semibold text-white"
            >
              Upload Image
            </label>
          </div>
          <div className="flex flex-col gap-y-2 w-[400px]">
            <label className="text-lg font-semibold">Title :</label>
            <input
              className="outline-none border bordered-2 rounded-md p-2"
              placeholder="Title"
              type="text"
              value={title}
              onChange={(e) => settitle(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-y-2 w-full">
            <label className="text-lg font-semibold"> Message:</label>
            <textarea
              className="outline-none border bordered-2 rounded-md p-2 resize-none w-full h-[100px]"
              placeholder="Message "
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          {uploadimg && title && message ? (
            <>
              {" "}
              <button
                onClick={handleSubmit}
                className=" relative top-9 p-2 px-4 bg-primary  cursor-pointer  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md font-semibold text-white"
              >
                Submit
              </button>
            </>
          ) : (
            <>
              <button className="relative top-9 p-2 px-4   cursor-pointer   bg-gray-500 rounded-md font-semibold text-white">
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
