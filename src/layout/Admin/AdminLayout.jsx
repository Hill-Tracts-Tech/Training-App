/* eslint-disable no-unused-vars */
import { Link, Outlet } from "react-router-dom";
import Brand from "../../components/Brand/Brand";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuBookIcon from "@mui/icons-material/MenuBook";
const AdminLayout = () => {
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
      id: 2,
      title: "News",
      to: "/admin/news",
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
  ];
  return (
    <div>
      <Brand />
      <Navbar />
      <div className="flex flex-row-reverse mt-[-20px] h-[100%] mb-10">
        <div style={{}} className="content md:w-[80%] w-full">
          <Outlet />
        </div>
        <div className="sidebar w-[20%] md:block hidden  ml-20">
          <div className="text-black font-semibold breadcrumbs ml-[2rem]"></div>
          <div className="text-left bg-white  p-5 flex flex-col shadow-lg rounded-lg gap-y-4 ">
            {" "}
            {list?.map((item, i) => (
              <Link key={item?.id} to={item?.to}>
                <div
                  className={`${
                    isActive(`${item.to}`)
                      ? "flex justify-start gap-4 text-orange-500   "
                      : "flex justify-start gap-4 hover:text-orange-400"
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

      <Footer />
    </div>
  );
};

export default AdminLayout;
