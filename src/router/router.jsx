import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import AboutUs from "../pages/AboutUs/AboutUs";
import NoticeBoard from "../pages/Notice/NoticeBoard";
import Gallery from "../pages/Gallery/Gallery";
import Result from "../pages/Result/Result";
import Teachers from "../pages/Teachers/Teachers";
import UserAccount from "../pages/Account/Account";
import Students from "../pages/Students/Students";
import Courses from "../pages/Courses/Courses";
import Registration from "../pages/Registration/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/admin",
        element: <div>Admin</div>,
      },
      {
        path: "/teacher",
        element: <Teachers />,
      },
      {
        path: "/course/:courseName",
        element: <Courses />,
      },
      {
        path: "/course/:id",
        element: <Courses />,
      },
      {
        path: "/student",
        element: <Students />,
      },
      {
        path: "/account",
        element: <UserAccount />,
      },
      {
        path: "/notice",
        element: <NoticeBoard />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/result",
        element: <Result />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
export default router;
