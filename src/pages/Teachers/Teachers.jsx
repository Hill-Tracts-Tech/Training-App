import { useState } from "react";
import Loader from "../../components/Loader/Loader";
import { useGetTeacherQuery } from "../../redux/features/teacher/teacherApi";
import { ImageUrl } from "../../utils/imageUrl";

const Teachers = () => {
  const { data: teachers, isLoading, isError, error } = useGetTeacherQuery();
  const [eye, setEye] = useState({});

  const datahandler = (id) => {
    const singleItem = teachers?.data?.find((item) => item?._id === id);
    setEye(singleItem);
  };

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
            <>
              <label
                htmlFor="my_modal_5"
                className="hover:text-blue-500  cursor-pointer"
                onClick={() => datahandler(teacher?._id)}
              >
                <div
                  key={teacher.name}
                  className="p-4 border rounded-md shadow-md flex justify-between cursor-pointer items-center hover:scale-95 ease-out duration-300"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
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
                    </div>
                  </div>
                </div>
              </label>
            </>
          ))}
          <input type="checkbox" id="my_modal_5" className="modal-toggle" />
          <div className="modal z-50">
            <div className="modal-box">
              <div className="modal-action block">
                <label
                  htmlFor="my_modal_5"
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                  X
                </label>
                <div className="flex justify-center gap-4 items-center">
                  <img
                    className="  h-38 w-48 rounded-lg border-2 border-cyan-400"
                    src={`${import.meta.env.VITE_APP_IMAGE_URL}/teachers/${
                      eye?.image
                    }`}
                    alt=""
                  />
                  <div>
                    <p className="my-2">
                      <span className=" font-bold">ID:</span> {eye?.teacherId}
                    </p>
                    <p>
                      <span className=" font-bold">Name:</span> {eye?.name}
                    </p>
                    <p className="my-2">
                      <span className=" font-bold">Designation:</span>{" "}
                      {eye?.designation}
                    </p>
                    <p>
                      <span className=" font-bold">Department:</span>{" "}
                      {eye?.department}
                    </p>
                  </div>
                </div>
                <p className="my-5 text-justify ">
                  <span className=" font-bold">About:</span> {eye?.about}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return content;
};

export default Teachers;
