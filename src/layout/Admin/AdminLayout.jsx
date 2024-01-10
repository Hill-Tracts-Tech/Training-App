/* eslint-disable no-unused-vars */
import { Link, Outlet, useLocation } from "react-router-dom";
import Brand from "../../components/Brand/Brand";
import Navbar from "../../components/Navbar/Navbar";

import NewspaperIcon from "@mui/icons-material/Newspaper";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AppsIcon from "@mui/icons-material/Apps";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import Bottombar from "../../components/Bottombar/Bottombar";

const AdminLayout = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const list = [
    {
      id: 1,
      title: "Overview",
      to: "/admin",
      icon: <MenuBookIcon />,
    },
    {
      id: 6,
      title: "Thumbnail",
      to: "/admin/thumbnail",
      icon: <ViewCarouselIcon />,
    },
    {
      id: 6,
      title: "Batch",
      to: "/admin/batch",
      icon: <ViewCarouselIcon />,
    },
    {
      id: 2,
      title: "Notice",
      to: "/admin/notice",
      icon: <NewspaperIcon />,
    },
    {
      id: 3,
      title: " Image",
      to: "/admin/image",
      icon: <InsertPhotoIcon />,
    },
    {
      id: 4,
      title: " Result",
      to: "/admin/result",
      icon: <ListAltIcon />,
    },
    {
      id: 5,
      title: " Teacher",
      to: "/admin/teacher",
      icon: <AccountCircleIcon />,
    },
    {
      id: 5,
      title: "Courses",
      to: "/admin/courses",
      icon: <AppsIcon />,
    },
  ];
  return (
    <div>
      <Brand />
      <Navbar />
      <div className="lg:hidden">
        <Bottombar list={list} />
      </div>
      <div className="flex flex-row-reverse mt-[-20px] h-[100%] ">
        <div className="content md:w-[80%] w-full">
          <Outlet />
        </div>
        <div className="sidebar w-[20%] md:block hidden  ml-20  ">
          <div className="text-black font-semibold breadcrumbs ml-[2rem]"></div>
          <div className="text-left h-[100vh] bg-white  p-5 flex flex-col shadow-lg rounded-lg gap-y-4 ">
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
          </div>
        </div>
        {/* Sidebar. In larger device's block and median device's hidden */}
      </div>
    </div>
  );
};

export default AdminLayout;
