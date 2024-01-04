import Loader from "../../components/Loader/Loader";
import { useGetTeacherQuery } from "../../redux/features/teacher/teacherApi";
import { ImageUrl } from "../../utils/imageUrl";

const Teachers = () => {
  const { data: teachers, isLoading, isError, error } = useGetTeacherQuery();

  let content = null;
  if (isLoading) {
    content = (
      <div>
        <Loader type={"Teacher"} />
      </div>
    );
  } else if (!isLoading && isError) {
    content = <div>{error}</div>;
  } else {
    content = (
      <div>
        <div className="w-full md:w-[85%] mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {teachers?.data?.map((teacher) => (
            <div
              key={teacher.name}
              className="p-4 border rounded-md shadow-md flex justify-between items-center hover:scale-95 ease-out duration-300"
            >
              <div className="w-full md:w-1/2">
                <img
                  src={`${ImageUrl}/teachers/${teacher.image}`}
                  alt={teacher.name}
                  className="w-48 h-48 object-cover rounded-full border-2 border-gradient"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex flex-col justify-center">
                  <h2 className="text-2xl font-bold">{teacher.name}</h2>
                  <p className="text-gray-600">{teacher.designation}</p>
                  <p className="text-gray-600">{teacher.department}</p>
                  <p>{teacher.about}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return content;
};

export default Teachers;
