// CourseList.js
import { useState } from "react";
import { courses } from "../../../Dammydata";
import { Link } from "react-router-dom";

const CourseList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterCourses = (category) => {
    setSelectedCategory(category);
  };

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <div>
      <div className="w-full md:w-[85%] mx-auto py-8">
        <div className="my-4">
          <select
            className="p-2 rounded-lg border"
            onChange={(e) => filterCourses(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Basic Computer">Basic Computer</option>
            <option value="MS Office">MS Office</option>
            <option value="Advanced MS Office">Advanced MS Office</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white p-4 rounded-lg shadow-lg">
              <div className="h-40">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <h2 className="text-lg font-semibold my-2">{course.title}</h2>
              <p className="text-gray-600">{course.description}</p>
              <Link to={`/course/${course.id}`}>
                <button className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseList;
