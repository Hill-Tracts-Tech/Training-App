import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Auth/Login";
import AboutUs from "../pages/AboutUs/AboutUs";
import NoticeBoard from "../pages/Notice/NoticeBoard";
import Gallery from "../pages/Gallery/Gallery";
import Result from "../pages/Result/Result";
import Teachers from "../pages/Teachers/Teachers";
import UserAccount from "../pages/Account/Account";
import Students from "../pages/Students/Students";
import Courses from "../pages/Courses/Courses";
import Registration from "../pages/Registration/Registration";
import AdminLayout from "../layout/Admin/AdminLayout";
// import AdminHome from "../pages/Admin/AdminHome";
import News from "../pages/Admin/Component/News";
import NewsForm from "../components/Form/NewsForm";
import ImageGallery from "../pages/Admin/Component/ImageGallery";
import ImageForm from "../components/Form/ImageForm";
import AdminHome from "../pages/Admin/AdminHome";
import AdminResult from "../pages/Admin/Component/AdminResult";
import ResultForm from "../components/Form/ResultForm";
import AdminTeacher from "../pages/Admin/Component/AdminTeacher";
import TeacherForm from "../components/Form/TeacherForm";
import AdminCourses from "../pages/Admin/Component/Courses";
import CourseForm from "../components/Form/CourseForm";
import Thumbnail from "../pages/Admin/Component/Thumbnail";
import ThumbnailForm from "../components/Form/ThumbnailForm";
import Batch from "../pages/Admin/Component/Batch";
import BatchForm from "../components/Form/BatchForm";
import CourseDetails from "../pages/Courses/Components/CourseDetails";

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
        path: "/teacher",
        element: <Teachers />,
      },
      {
        path: "/course/:category",
        element: <Courses />,
      },
      {
        path: "/course/:category/:id",
        element: <CourseDetails />,
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
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <AdminHome />,
      },
      {
        path: "/admin/notice",
        element: <News />,
      },
      {
        path: "/admin/image",
        element: <ImageGallery />,
      },
      {
        path: "/admin/imageForm",
        element: <ImageForm />,
      },
      {
        path: "/admin/noticeForm",
        element: <NewsForm />,
      },
      {
        path: "/admin/result",
        element: <AdminResult />,
      },
      {
        path: "/admin/resultForm",
        element: <ResultForm />,
      },
      {
        path: "/admin/thumbnail",
        element: <Thumbnail />,
      },
      {
        path: "/admin/batch",
        element: <Batch />,
      },
      {
        path: "/admin/batchForm",
        element: <BatchForm />,
      },
      {
        path: "/admin/thumbnailForm",
        element: <ThumbnailForm />,
      },
      {
        path: "/admin/teacher",
        element: <AdminTeacher />,
      },
      {
        path: "/admin/teacherForm",
        element: <TeacherForm />,
      },
      {
        path: "/admin/courses",
        element: <AdminCourses />,
      },
      {
        path: "/admin/courseForm",
        element: <CourseForm />,
      },
    ],
  },
]);
export default router;
