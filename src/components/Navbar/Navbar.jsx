import { Link, useLocation } from "react-router-dom";
import { menu } from "./Navdata";

import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };
  const admin = location.pathname;

  // const closeEnquiryModal = () => {
  //   setEnquiryModalOpen(false);
  // };

  // close dropdown onClick
  document.querySelectorAll("summary").forEach((summary) => {
    summary.addEventListener("click", (event) => {
      document.querySelectorAll("details").forEach((details) => {
        if (details !== event.target.parentNode) {
          details.removeAttribute("open");
        }
      });
    });
  });

  // Close the dropdown when clicking outside the dropdown
  document.addEventListener("click", (event) => {
    const dropdown = document.querySelector(".dropdown");
    if (!dropdown.contains(event.target)) {
      document.querySelectorAll("details").forEach((details) => {
        details.removeAttribute("open");
      });
    }
  });

  return (
    <>
      <div
        className={`navbar sticky top-0 ${
          admin === "/admin/teacher" ||
          admin === "/admin/result" ||
          admin === "/admin/notice" ||
          admin === "/admin/thumbnail" ||
          admin === "/teacher" ||
          admin === "/account" ||
          admin === "/admin/courses"
            ? " w-[90%] mx-auto"
            : "z-[99999] w-[90%] mx-auto"
        } `}
      >
        <div className="text-center hidden lg:flex shadow-md rounded-md mb-9 w-[98%] justify-center mx-auto bg-white">
          <ul className="menu menu-horizontal px-1 gap-x-4  ">
            {menu.map((m) => (
              <li
                key={m.id}
                className={`${
                  isActive(`${m.to}`)
                    ? "text-orange-500 border-solid border-b-2 border-orange-700"
                    : ""
                }`}
              >
                {m.id === 4 ? (
                  <details>
                    <summary>{m.label}</summary>
                    <ul className="p-2 w-[250px]">
                      {m?.submenu?.map((subitem) => (
                        <li
                          key={subitem.id}
                          className={`${
                            isActive(`${subitem.to}`)
                              ? "text-orange-500 border-solid border-b-2 border-orange-700"
                              : ""
                          }`}
                        >
                          <summary>
                            <Link to={subitem.to}>{subitem.label}</Link>
                          </summary>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link to={m.to}>{m.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default Navbar;
