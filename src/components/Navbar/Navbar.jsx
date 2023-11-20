import { Link, useLocation } from "react-router-dom";
import { menu } from "./Navdata";
import { useState } from "react";
import EnquiryModal from "../EnquiryForm/EnquiryForm";
import Menu from "./menu";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };
  // const admin = location.pathname;
  const [isEnquiryModalOpen, setEnquiryModalOpen] = useState(false);

  const openEnquiryModal = () => {
    setEnquiryModalOpen(!isEnquiryModalOpen);
  };

  const closeEnquiryModal = () => {
    setEnquiryModalOpen(false);
  };
  return (
    <>
      <div
        className={`navbar sticky top-0 
          z-[99999]
         `}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <Menu />
            {/* Mobile view */}
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-[300px]">
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
                        {m.submenu.map((subitem) => (
                          <li
                            key={subitem.id}
                            className={`${
                              isActive(`${subitem.to}`)
                                ? "text-orange-500 border-solid border-b-2 border-orange-700"
                                : ""
                            }`}
                          >
                            <details>
                              <summary>{subitem.label}</summary>
                              <ul>
                                {subitem.sibling.map((s, i) => (
                                  <li key={i}>
                                    <Link to={s.to}>{s.label}</Link>
                                  </li>
                                ))}
                              </ul>
                            </details>
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
        <div className="navbar-center hidden lg:flex shadow-md rounded-md mb-9">
          <ul className="menu menu-horizontal px-1 gap-x-4 ">
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
                      {m.submenu.map((subitem) => (
                        <li
                          key={subitem.id}
                          className={`${
                            isActive(`${subitem.to}`)
                              ? "text-orange-500 border-solid border-b-2 border-orange-700"
                              : ""
                          }`}
                        >
                          <details>
                            <summary>{subitem.label}</summary>
                            <ul>
                              {subitem.sibling.map((s, i) => (
                                <li key={i}>
                                  <Link to={s.to}>{s.label}</Link>
                                </li>
                              ))}
                            </ul>
                          </details>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link to={m.to}>{m.label}</Link>
                )}
              </li>
            ))}
            <li>
              <button
                className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md font-semibold text-white"
                onClick={openEnquiryModal}
              >
                Enquiry
              </button>
            </li>
          </ul>
        </div>

        <div className="navbar-end"></div>
        <div className="ease-in duration-300 ">
          {isEnquiryModalOpen && (
            <EnquiryModal
              isOpen={isEnquiryModalOpen}
              onClose={closeEnquiryModal}
            />
          )}
        </div>
      </div>
    </>
  );
}
export default Navbar;
