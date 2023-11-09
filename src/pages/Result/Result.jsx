import { useEffect, useState } from "react";
import { results } from "../../Dammydata"; // fake result data
import { Delete, Visibility } from "@mui/icons-material";
import PublishedResult from "./Publish";

const Result = () => {
  const [search, setSearch] = useState("");
  const [filteredResults, setFilteredResults] = useState(results);
  const [noResults, setNoResults] = useState(false);
  useEffect(() => {
    handleSearch();
  }, [search]);

  const handleSearch = () => {
    const query = search.toLowerCase().trim();
    if (query === "") {
      setFilteredResults(results);
      setNoResults(false);
    } else {
      const filtered = results.filter(
        (result) =>
          result.name.toLowerCase().includes(query) ||
          result.studentId.includes(query)
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearchKeyDown}
          />
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
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Course Name</th>
                <th className="border p-2">Student ID</th>
                <th className="border p-2">Student Name</th>
                <th className="border p-2">Result Status</th>
                <th className="border p-2">Marks(of 100%)</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredResults &&
                filteredResults.map((result) => (
                  <tr key={result.id}>
                    <td className="border p-2">{result.courseName}</td>
                    <td className="border p-2">{result.studentId}</td>
                    <td className="border p-2 font-bold">{result.name}</td>
                    <td
                      className={`border p-2 font-semibold ${
                        result.resultStatus === "Fail" ? "text-red-500" : ""
                      }`}
                    >
                      {result.resultStatus}
                    </td>
                    <td className="border p-2">{result.totalMarks}%</td>
                    <td className="border p-2 flex justify-evenly items-center">
                      <button>
                        <Visibility />
                      </button>
                      <button>
                        <Delete style={{ color: "#ed3535" }} />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
        <div className="join my-5 w-full">
          <button className="join-item btn">1</button>
          <button className="join-item btn btn-active">2</button>
          <button className="join-item btn">3</button>
          <button className="join-item btn">4</button>
        </div>
        <PublishedResult />
      </div>
    </div>
  );
};

export default Result;
