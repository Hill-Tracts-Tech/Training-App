import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
const News = () => {
  const data = [
    {
      title: "Breaking News 1",
      image: "https://example.com/image1.jpg",
      description:
        "This is the description for breaking news 1. It contains important information and details about the event.",
    },
    {
      title: "Latest Update 2",
      image: "https://example.com/image2.jpg",
      description:
        "Here is the latest update on a significant event. The description provides insights and context to the readers.",
    },
    {
      title: "Special Report 3",
      image: "https://example.com/image3.jpg",
      description:
        "A special report with in-depth coverage and analysis. The description dives into the various aspects of the topic.",
    },
  ];
  return (
    <div>
      {/* <NewsForm /> */}
      <div>
        <div className="w-full md:w-[85%] p-4">
          <Link
            className="relative top-2 z p-2 px-4 bg-primary  cursor-pointer  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md font-semibold text-white"
            to="/admin/newsForm"
          >
            Add News
          </Link>
          <table className="w-full border-collapse border overflow-x-scroll mt-5 rounded-lg">
            <thead>
              <tr className=" bg-gradient-to-r from-cyan-500 to-blue-500 text-white ">
                <th className="border p-2">NO</th>
                <th className="border p-2">Image</th>
                <th className="border p-2">Title</th>
                <th className="border p-2">Description </th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, i) => (
                <>
                  <tr key={i}>
                    <td className="border p-2 font-bold">
                      <p>{i + 1}</p>
                    </td>
                    <td className="border p-2 font-bold">
                      <img
                        className="w-full h-32"
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
                        alt=""
                      />
                    </td>
                    <td className="border p-2">{item?.title}</td>
                    <td className="border p-2">{item?.description}</td>
                    <td className="border p-2">
                      <div className="flex justify-center gap-3 items-center">
                        <VisibilityIcon />
                        <DeleteIcon className="text-red-400" />
                      </div>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default News;
