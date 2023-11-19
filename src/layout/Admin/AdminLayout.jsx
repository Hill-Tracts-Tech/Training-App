import { Link, Outlet } from "react-router-dom";
import Brand from "../../components/Brand/Brand";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const AdminLayout = () => {
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
          <div className="text-left bg-white  p-5 flex flex-col shadow-lg rounded-lg gap-y-4">
            {" "}
            <Link to="/admin/news">
              <div className="flex justify-start gap-4 hover:text-orange-400">
                <NewspaperIcon />
                News
              </div>
            </Link>
            <Link to="/admin/image">
              <div className="flex justify-start gap-4 hover:text-orange-400">
                <InsertPhotoIcon />
                Image
              </div>
            </Link>
            <Link to="/admin/result">
              <div className="flex justify-start gap-4 hover:text-orange-400">
                <ListAltIcon />
                Result
              </div>
            </Link>
            <Link to="/admin/teacher">
              <div className="flex justify-start gap-4 hover:text-orange-400">
                <AccountCircleIcon />
                Teacher
              </div>
            </Link>
          </div>
        </div>
        {/* Sidebar. In larger device's block and median device's hidden */}
      </div>

      <Footer />
    </div>
  );
};

export default AdminLayout;
