import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import Brand from "../../components/Brand/Brand";
const MainLayout = () => {
  return (
    <div>
      <Brand />
      <Navbar />
      <Slider />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
