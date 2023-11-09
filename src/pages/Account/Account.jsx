import img from "../../assets/img/mission.png";
// Fake data
const user = {
  name: "John Doe",
  profilePicture: img,
  enrollmentHistory: [
    {
      courseName: "Mathematics 101",
      enrollmentDate: "2023-03-01",
    },
    {
      courseName: "Science 202",
      enrollmentDate: "2023-02-15",
    },
  ],
  lastVisited: "2023-03-10 15:30:00",
  runningCourse: {
    courseName: "Physics 303",
    relatedCourses: ["Physics Lab", "Advanced Physics"],
  },
};

const UserAccount = () => {
  return (
    <div>
      {" "}
      <div className="w-full md:w-[85%] mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 md:grid md:grid-cols-2">
            <div className="text-center md:text-left">
              <img
                src={user.profilePicture}
                alt={user.name}
                className="w-36 h-36 rounded-full border-2 border-gradient"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <p className="text-gray-600">Enrollment History:</p>
              <ul className="list-disc ml-6">
                {user.enrollmentHistory.map((enrollment, index) => (
                  <li key={index}>
                    {enrollment.courseName} (Enrolled on{" "}
                    {enrollment.enrollmentDate})
                  </li>
                ))}
              </ul>
              <p className="text-gray-600">Last Visited:</p>
              <p>{user.lastVisited}</p>
            </div>
          </div>
          <div className="p-4 md:grid md:grid-cols-1">
            <h2 className="text-2xl font-bold">Running Course:</h2>
            <p>{user.runningCourse.courseName}</p>
            <p className="text-gray-600">You may choose:</p>
            <ul className="list-disc ml-6">
              {user.runningCourse.relatedCourses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
