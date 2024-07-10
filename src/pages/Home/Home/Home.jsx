import Banner from "../Banner/Banner";
import CourseList from "../CourseList/CourseList";
// import CourseList from "../Courses/Courses";
import Facilities from "../Facilities/Facilities";
import Introduction from "../Introduction/Introduction";
import JoinUs from "../JoinUs/JoinUs";
import Member from "../Member/Member";
import VisitUs from "../VisitUs/VisitUs";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner />
      <Introduction />

      <Member />
      <Facilities />
      <VisitUs />
      {/* <CourseList /> */}
      <JoinUs />
      <CourseList />
    </div>
  );
};
export default Home;
