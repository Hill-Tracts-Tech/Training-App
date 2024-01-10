import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import Brand from "../../components/Brand/Brand";
import Bottombar from "../../components/Bottombar/Bottombar";
const MainLayout = () => {
  const location = useLocation();
  const loc1 = location.pathname.split("/")[1];
  const loc = location.pathname;
  const excludeRoute = [
    "registration",
    "account",
    "course",
    "login",
    "register",
  ];

  return (
    <div>
      {loc === "/login" || loc === "/register" ? <></> : <Brand />}
      {loc === "/login" || loc === "/register" ? <></> : <Navbar />}

      {!excludeRoute.includes(loc1) && <Slider />}
      <div className="lg:hidden">
        {loc === "/login" || loc === "/register" ? (
          <></>
        ) : (
          <Bottombar list={""} />
        )}
      </div>
      <Outlet />
      {loc === "/login" || loc === "/register" ? <></> : <Footer />}
    </div>
  );
};

export default MainLayout;
