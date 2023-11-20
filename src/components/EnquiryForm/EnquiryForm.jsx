/* eslint-disable react/prop-types */
import { useState } from "react";

function EnquiryModal({ isOpen, onClose }) {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    console.log("Form data");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 right-0 w-full h-full bg-[#1f1e1e8f] flex justify-end z-[9999]">
      <div className="bg-[#fff] p-5 rounded-md w-[350px]">
        <div className="flex justify-between">
          <h2 className="text-3xl text-gray-600 mb-2">Enquiry Form</h2>
          <button
            className="text-2xl hover:bg-red-500 hover:text-white"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <form className="" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-2 w-full">
            <label>Full Name:</label>
            <input
              className="outline-none border bordered-2 rounded-md p-2"
              placeholder="Full Name"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-y-2 w-full">
            <label>Phone Number:</label>
            <input
              className="outline-none border bordered-2 rounded-md p-2"
              placeholder="Phone Number"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-y-2 w-full">
            <label>Select Course:</label>
            <select
              className="outline-none border bordered-2 rounded-md p-2"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
            >
              <option value="@">Select a Course</option>
              <option value="Course A">Course A</option>
              <option value="Course B">Course B</option>
              <option value="Course B">Course B</option>
            </select>
          </div>
          <div className="flex flex-col gap-y-2 w-full">
            <label>Optional Message:</label>
            <textarea
              className="outline-none border bordered-2 rounded-md p-2 resize-none w-full h-[100px]"
              placeholder="Message Us"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-500 px-4 border-none outline-none rounded-md uppercase font-semibold text-white mt-4"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default EnquiryModal;
