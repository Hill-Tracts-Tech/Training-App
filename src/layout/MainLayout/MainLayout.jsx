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
      {!loc === ("/login" || "/register") ? <></> : <Brand />}
      {!loc === ("/login" || "/register") ? <></> : <Navbar />}

      {!excludeRoute.includes(loc1) && <Slider />}
      <div className="lg:hidden">
        {!loc === ("/login" || "/register") ? <></> : <Bottombar list={""} />}
      </div>
      <Outlet />
      {loc === ("/login" || "/register") ? <></> : <Footer />}
    </div>
  );
};

export default MainLayout;
