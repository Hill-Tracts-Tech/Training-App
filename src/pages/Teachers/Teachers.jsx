import { teachers } from "../../Dammydata"; // fake data

const Teachers = () => {
  return (
    <div>
      <div className="w-full md:w-[85%] mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {teachers.map((teacher) => (
          <div
            key={teacher.name}
            className="p-4 border rounded-md shadow-md flex justify-between items-center hover:scale-95 ease-out duration-300"
          >
            <div className="w-full md:w-1/2">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-48 h-48 object-cover rounded-full border-2 border-gradient"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold">{teacher.name}</h2>
                <p className="text-gray-600">{teacher.designation}</p>
                <p className="text-gray-600">{teacher.education}</p>
                <p>{teacher.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="max-w-[85%] mx-auto">
        {teachers &&
          teachers.map((teacher, i) => (
            <div
              key={i}
              className={
                (i + 1) % 2 == 0
                  ? "md:flex justify-between items-center flex-row-reverse my-3"
                  : "md:flex justify-between items-center my-3 single-service"
              }
            >
              <div className="md:w-1/2 w-full p-4 rounded-full">
                <img
                  className="w-72 h-72 mx-auto border border-solid border-red-200 rounded-full"
                  src={teacher.image}
                  alt={teacher.name}
                />
              </div>
              <div className="md:w-1/2 w-full p-4 dark:text-white">
                <h2 className="text-2xl font-bold">{teacher.name}</h2>
                <p className="text-gray-600">{teacher.designation}</p>
                <p className="text-gray-600">{teacher.education}</p>
                <p>{teacher.description}</p>
              </div>
            </div>
          ))}
      </div> */}
    </div>
  );
};

export default Teachers;
