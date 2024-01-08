import { Link } from "react-router-dom";
import {
  useDeleteImageMutation,
  useGetImagesQuery,
} from "../../../redux/features/gallery/galleryApi";
import DeleteIcon from "@mui/icons-material/Delete";
import toast from "react-hot-toast";
import Loader from "../../../components/Loader/Loader";

const ImageGallery = () => {
  const { data: images, isLoading, refetch } = useGetImagesQuery();
  const [deleteImage] = useDeleteImageMutation();

  const handleDelete = async (imageId) => {
    try {
      const result = await deleteImage(imageId).unwrap();
      if (result.statusCode === 200) {
        toast.success("Image deleted successfully");
        refetch();
      }
    } catch (error) {
      toast.error(error);
    }
  };

  if (isLoading)
    return (
      <div>
        <Loader type={"AdminImage"} />
      </div>
    );

  return (
    <div className="ml-3">
      <Link
        className="relative shadow-lg top-5 ml-5 z p-2 px-4 bg-primary  cursor-pointer  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md font-semibold text-white"
        to="/admin/imageForm"
      >
        Add Image
      </Link>
      <div className="flex flex-wrap mt-6 gap-2 gap-3lex-wrap justify-start bg-white shadow-lg p-5  mr-20">
        {images?.data?.map((item, index) => (
          <div key={index} className="w-200px">
            <div>
              <img
                src={`${import.meta.env.VITE_APP_IMAGE_URL}/gallery/${
                  item.image
                }`}
                alt={`Image ${index + 1}`}
                className=" -z-40 cursor-pointer hover:scale-110 ease-in-out duration-300 h-[160px] w-[200px] rounded-md"
              />
            </div>
            <DeleteIcon
              className="text-red-400 hover:text-black cursor-pointer"
              onClick={() => handleDelete(item?._id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
