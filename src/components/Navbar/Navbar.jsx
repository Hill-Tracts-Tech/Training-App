import { Link, useLocation } from "react-router-dom";
import { menu } from "./Navdata";
import Menu from "./menu";
import "./Navbar.css";
import { useAuth } from "../../context/useAuth";

function Navbar() {
  const location = useLocation();
  const { isLoggedIn } = useAuth();
  const isActive = (path) => {
    return location.pathname === path;
  };
  const admin = location.pathname;

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
        <div className="navbar-start hidden  lg:block ">
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
                  style={{
                    display: m?.private === true && !isLoggedIn ? "none" : "",
                  }}
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
        <div></div>
        <div className="navbar-center hidden lg:flex shadow-md rounded-md mb-9">
          <ul className="menu menu-horizontal px-1 gap-x-4 bg-white">
            {menu.map((m) => (
              <li
                key={m.id}
                className={`${
                  isActive(`${m.to}`)
                    ? "text-orange-500 border-solid border-b-2 border-orange-700"
                    : ""
                }`}
                style={{
                  display: m?.private === true && !isLoggedIn ? "none" : "",
                }}
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

        <div className="navbar-end"></div>
      </div>
    </>
  );
}
export default Navbar;
