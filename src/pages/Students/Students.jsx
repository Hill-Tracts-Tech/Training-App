import { useEffect, useState } from "react";
import { students } from "../../Dammydata"; // fake result data

const Students = () => {
  const [search, setSearch] = useState("");
  console.log("searching for", search);
  const [filteredResults, setFilteredResults] = useState(students);
  const [noResults, setNoResults] = useState(false);
  useEffect(() => {
    handleSearch();
  }, [search]);

  const handleSearch = () => {
    const query = search.toLowerCase().trim();
    if (query === "") {
      setFilteredResults(students);
      setNoResults(false);
    } else if (query === "@") {
      setFilteredResults(students);
      setNoResults(false);
    } else {
      const filtered = students.filter(
        (result) =>
          result.name.toLowerCase().includes(query) ||
          result.studentId.includes(query) ||
          result.batch.includes(query)
      );
      setFilteredResults(filtered);
      setNoResults(filtered.length === 0);
    }
  };

  const handleSearchKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <div className="w-full md:w-[85%] mx-auto p-4">
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            placeholder="Search by name or student ID"
            className="p-2 border rounded w-full"
            // value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearchKeyDown}
          />
          <select
            className="p-2 border rounded w-full"
            onChange={(e) => setSearch(e.target.value)}
          >
            <option value="@">Select Batch</option>
            <option value="1st">1st Batch</option>
            <option value="2nd">2nd Batch</option>
            <option value="3rd">3rd Batch</option>
          </select>
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        {noResults ? (
          <p className="text-red-600">No data found. Double check Id or Name</p>
        ) : (
          <table className="w-full border-collapse border border-gray-300 overflow-x-scroll">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Student Name</th>
                <th className="border p-2">StudentID</th>
                <th className="border p-2">CourseId</th>
                <th className="border p-2">Batch NO</th>
                <th className="border p-2">Address</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Phone</th>
              </tr>
            </thead>
            <tbody>
              {filteredResults &&
                filteredResults.map((result) => (
                  <tr key={result.id}>
                    <td className="border p-2 font-bold">{result.name}</td>
                    <td className="border p-2">{result.studentId}</td>
                    <td className="border p-2">{result.courseId}</td>
                    <td className="border p-2">{result.batch} Batch</td>
                    <td className="border p-2">{result.address}</td>
                    <td className="border p-2">{result.email}</td>
                    <td className="border p-2">{result.phone}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Students;
