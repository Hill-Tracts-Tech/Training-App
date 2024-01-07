import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import Brand from "../../components/Brand/Brand";
import Bottombar from "../../components/Bottombar/Bottombar";
const MainLayout = () => {
  const location = useLocation();
  const registor = location.pathname;
  return (
    <div>
      <Brand />
      <Navbar />
      {registor === "/registration" ||
      registor === "/account" ||
      registor === "/course/orion_selai_proshikhon_center" ||
      registor === "/course/orion_computer_institute" ? (
        ""
      ) : (
        <Slider />
      )}
      <div className="lg:hidden">
        <Bottombar list={""} />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
