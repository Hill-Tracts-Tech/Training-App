import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  useDeleteRegisterStudentMutation,
  useGetRegisterStudentQuery,
} from "../../redux/features/studentRegistration/studentRegistrationApi";
import { useGetAllBatchQuery } from "../../redux/features/batch/batchApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const Students = () => {
  const { data: students, isLoading } = useGetRegisterStudentQuery();
  const { data: batchData } = useGetAllBatchQuery();
  const [deleteStudent] = useDeleteRegisterStudentMutation();
  const studentData = students?.data;
  const [search, setSearch] = useState("");
  const [filteredResults, setFilteredResults] = useState(studentData);
  const [noResults, setNoResults] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (studentData) {
      setFilteredResults(studentData);
    }
  }, [studentData]);

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const handleSearch = () => {
    const query = search.toLowerCase().trim();
    if (query === "") {
      setFilteredResults(studentData);
      setNoResults(false);
    } else if (query === "@") {
      setFilteredResults(studentData);
      setNoResults(false);
    } else {
      const filtered = studentData.filter(
        (result) =>
          result?.studentName?.toLowerCase().includes(query) ||
          result?.studentId?.toLowerCase().includes(query) ||
          result?.batch?.batchNo?.toLowerCase()?.includes(query) ||
          result?.phoneNumber1?.toLowerCase()?.includes(query)
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

  // handle delete student
  const handleDelete = async (studentId) => {
    try {
      const res = await deleteStudent(studentId).unwrap();
      if (res.statusCode === 200) {
        toast.success("Student deleted successfully");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  // edit student
  const handleEditClick = (item) => {
    navigate("/account", { state: { editMode: true, item } });
  };

  return (
    <div>
      {isLoading ? (
        <Loader type={"Student"} />
      ) : (
        <div className="w-full md:w-[85%] mx-auto p-4">
          <div className="flex space-x-4 mb-4">
            <input
              type="text"
              placeholder="Search by name or student ID or phone number"
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
              {batchData?.data?.map((batch) => (
                <option key={batch._id} value={batch.batchNo}>
                  {batch?.batchName}{" "}
                </option>
              ))}
            </select>
            <button
              className="bg-blue-500 text-white p-2 rounded"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          <div className="lg:block hidden">
            {noResults ? (
              <p className="text-red-600">
                No data found. Double check Id or Name
              </p>
            ) : (
              <table className="w-full border-collapse border border-gray-300 overflow-x-scroll">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border p-2">Student Name</th>
                    <th className="border p-2">StudentID</th>
                    <th className="border p-2">Course Name</th>
                    <th className="border p-2">Batch NO</th>
                    <th className="border p-2">Address</th>
                    <th className="border p-2">Email</th>
                    <th className="border p-2">Phone</th>
                    <th className="border p-2">Payment Status</th>
                    <th className="border p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredResults?.map((result) => {
                    return (
                      <tr key={result?._id}>
                        <td className="border p-2 font-bold">
                          {result?.studentName}
                        </td>
                        <td className="border p-2">{result?.studentId}</td>
                        <td className="border p-2">
                          {result?.course?.title} - {result?.course?.duration}
                        </td>
                        <td className="border p-2">{result?.batch?.batchNo}</td>
                        <td className="border p-2">{result?.presentAddress}</td>
                        <td className="border p-2">{result?.email}</td>
                        <td className="border p-2">{result?.phoneNumber1}</td>
                        <td className="border p-2">
                          {result?.registrationStatus}
                        </td>

                        <td className="border p-2 text-center">
                          <div className="dropdown ">
                            <div tabIndex={0} role="button" className=" ">
                              {" "}
                              <MoreVertIcon />
                            </div>
                            <ul
                              tabIndex={0}
                              className="dropdown-content z-[1] menu px-3 py-4 shadow-lg bg-base-100 rounded-md ms-[-23px]"
                            >
                              <div className="flex flex-col justify-start gap-2 ">
                                <div
                                  onClick={() => handleEditClick(result)}
                                  className=" hover:text-blue-500  cursor-pointer flex justify-start gap-2"
                                >
                                  <InfoIcon className=" " />
                                  <p>Info</p>
                                </div>
                                <div
                                  onClick={() => handleDelete(result?._id)}
                                  className="flex justify-start gap-2 hover:text-blue-500  cursor-pointer"
                                >
                                  <DeleteIcon className=" " />
                                  <p>Delete</p>
                                </div>
                              </div>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
          <div className=" md:hidden  ">
            {noResults ? (
              <p className="text-red-600">
                No data found. Double check Id or Name
              </p>
            ) : (
              <div className=" overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 overflow-x-scroll h-full">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border p-2">Student Name</th>
                      <th className="border p-2">StudentID</th>
                      <th className="border p-2">Course Name</th>
                      <th className="border p-2">Batch NO</th>
                      <th className="border p-2">Address</th>
                      <th className="border p-2">Email</th>
                      <th className="border p-2">Phone</th>
                      <th className="border p-2">Payment Status</th>
                      <th className="border p-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredResults?.map((result) => {
                      return (
                        <tr key={result?._id}>
                          <td className="border p-2 font-bold">
                            {result?.studentName}
                          </td>
                          <td className="border p-2">{result?.studentId}</td>
                          <td className="border p-2">
                            {result?.course?.title} - {result?.course?.duration}
                          </td>
                          <td className="border p-2">
                            {result?.batch?.batchNo}
                          </td>
                          <td className="border p-2">
                            {result?.presentAddress}
                          </td>
                          <td className="border p-2">{result?.email}</td>
                          <td className="border p-2">{result?.phoneNumber1}</td>
                          <td className="border p-2">
                            {result?.registrationStatus}
                          </td>

                          <td className="border p-2 text-center">
                            <div className="dropdown dropdown-end">
                              <div tabIndex={0} role="button" className=" ">
                                {" "}
                                <MoreVertIcon />
                              </div>
                              <ul
                                tabIndex={0}
                                className="dropdown-content z-[1] menu px-3 py-4 shadow-lg bg-base-100 rounded-md ms-[-23px]"
                              >
                                <div className="flex flex-col justify-start gap-2 ">
                                  <div
                                    onClick={() => handleEditClick(result)}
                                    className=" hover:text-blue-500  cursor-pointer flex justify-start gap-2"
                                  >
                                    <InfoIcon className=" " />
                                    <p>Info</p>
                                  </div>
                                  <div
                                    onClick={() => handleDelete(result?._id)}
                                    className="flex justify-start gap-2 hover:text-blue-500  cursor-pointer"
                                  >
                                    <DeleteIcon className=" " />
                                    <p>Delete</p>
                                  </div>
                                </div>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Students;
