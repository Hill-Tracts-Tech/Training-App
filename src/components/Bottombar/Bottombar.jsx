import HomeIcon from "@mui/icons-material/Home";
// import SchoolIcon from "@mui/icons-material/School";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import AppsIcon from "@mui/icons-material/Apps";
import { Link, useLocation } from "react-router-dom";
import { menu } from "../Navbar/Navdata";
const Bottombar = () => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };
  return (
    <div className=" bg-white z-50 w-full px-5 py-2 flex justify-between border-t-2 bg-b   fixed bottom-0">
      <div className="dropdown dropdown-top dropdown-start">
        <div tabIndex={0} role="button" className="">
          <MenuOpenIcon
            style={{ fontSize: "33px" }}
            className="text-blue-500"
          />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
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
                    <ul className="p-2 w-[150px]">
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
          </li>
        </ul>
      </div>
      <Link to="/">
        <HomeIcon style={{ fontSize: "33px" }} className="text-blue-500" />
      </Link>
      <Link to="/teacher">
        <AppsIcon style={{ fontSize: "33px" }} className="text-blue-500" />
      </Link>
      <Link to="/admin">
        <AdminPanelSettingsIcon
          style={{ fontSize: "33px" }}
          className="text-blue-500"
        />
      </Link>
    </div>
  );
};

export default Bottombar;
