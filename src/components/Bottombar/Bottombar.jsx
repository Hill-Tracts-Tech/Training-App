/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import HomeIcon from "@mui/icons-material/Home";
// import SchoolIcon from "@mui/icons-material/School";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import AppsIcon from "@mui/icons-material/Apps";
import { Link, useLocation } from "react-router-dom";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import SchoolIcon from "@mui/icons-material/School";
import GroupIcon from "@mui/icons-material/Group";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import InfoIcon from "@mui/icons-material/Info";
const Bottombar = ({ list }) => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };
  const admin = location.pathname;
  const bottomdata = [
    {
      id: 3,
      label: "Teachers",
      to: "/teacher",
      icon: <GroupIcon />,
    },
    {
      id: 4,
      label: "Courses",
      to: "#",
      submenu: [
        {
          id: 41,
          label: "Orion Selai Proshikhon Center",
          to: "/course/orion_selai_proshikhon_center",
          sibling: [
            {
              id: 411,
              label: "Dress Making",
              to: "/course/dress",
            },
          ],
        },
        {
          id: 42,
          label: "Orion Computer Institute",
          to: "/course/orion_computer_institute",
          sibling: [
            {
              id: 421,
              label: "MS Office",
              to: "/course/ms",
            },
            {
              id: 422,
              label: "Database Programming",
              to: "/course/dp",
            },
            {
              id: 423,
              label: "Graphics Design",
              to: "/course/gd",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      label: "Students",
      to: "/student",
      icon: <SchoolIcon />,
    },

    {
      id: 7,
      label: "Notice",
      to: "/notice",
      icon: <NewspaperIcon />,
    },
    {
      id: 8,
      label: "Registration",
      to: "/registration",
      icon: <DashboardIcon />,
    },
    {
      id: 9,
      label: "Gallery",
      to: "/gallery",
      icon: <InsertPhotoIcon />,
    },
    {
      id: 10,
      label: "Result",
      to: "/result",
      icon: <ContentPasteSearchIcon />,
    },
    {
      id: 11,
      label: "About Us",
      to: "/about",
      icon: <InfoIcon />,
    },
  ];
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
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 relative left-[-20px] mb-2"
        >
          {admin === "/admin" ||
          admin === "/admin/teacher" ||
          admin === "/admin/batch" ||
          admin === "/admin/result" ||
          admin === "/admin/thumbnail" ||
          admin === "/admin/image" ||
          admin === "/admin/courses" ||
          admin === "/admin/notice" ? (
            <>
              {" "}
              {list?.map((item, i) => (
                <Link key={item?.id} to={item?.to}>
                  <div
                    className={`${
                      isActive(`${item.to}`)
                        ? "flex justify-start gap-4 text-orange-500 bg-gray-300 rounded-lg px-5 py-3"
                        : "flex justify-start gap-4 hover:text-orange-400 px-5 py-3"
                    }`}
                  >
                    {item?.icon}
                    {item?.title}
                  </div>
                </Link>
              ))}
            </>
          ) : (
            <>
              <li>
                {bottomdata.map((m) => (
                  <>
                    {m.id === 4 ? (
                      <></>
                    ) : (
                      <li
                        key={m.id}
                        className={`${
                          isActive(`${m.to}`)
                            ? "text-orange-500 border-solid border-b-2 border-orange-700"
                            : ""
                        }`}
                      >
                        <Link key={m?.id} to={m?.to}>
                          <div
                            className={`${
                              isActive(`${m.to}`)
                                ? "flex justify-start gap-2 text-orange-500 bg-gray-300 rounded-lg py-3"
                                : "flex justify-start gap-2 hover:text-orange-400  py-3"
                            }`}
                          >
                            {m?.icon}
                            {m?.title}
                          </div>
                        </Link>
                        <Link to={m.to}>{m.label}</Link>
                      </li>
                    )}
                  </>
                ))}
              </li>
            </>
          )}
        </ul>
      </div>
      <Link to="/">
        <HomeIcon style={{ fontSize: "33px" }} className="text-blue-500" />
      </Link>
      <div className="dropdown dropdown-top dropdown-end ">
        <div tabIndex={0} role="button" className=" m-1">
          <AppsIcon style={{ fontSize: "33px" }} className="text-blue-500" />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow-xl bg-base-100 rounded-box w-[90vw]  left-[-209px] mb-2 card-bordered"
        >
          <li>
            {bottomdata.map((m) => (
              <>
                {m.id === 4 && (
                  <li
                    key={m.id}
                    className={`${
                      isActive(`${m.to}`)
                        ? "text-orange-500 border-solid border-b-2 border-orange-700"
                        : ""
                    }`}
                  >
                    <ul className="p-2 w-full">
                      {m.submenu.map((subitem) => (
                        <li
                          key={subitem.id}
                          className={` ${
                            isActive(`${subitem.to}`)
                              ? "text-orange-500 border-solid border-b-2 border-orange-700"
                              : ""
                          }`}
                        >
                          <Link to={subitem.to}>{subitem.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                )}
              </>
            ))}
          </li>
        </ul>
      </div>

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
