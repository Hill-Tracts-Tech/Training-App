import CourseModules from "./CourseModules";
import CourseOverview from "./CouseOverview";
import JoinToday from "./Join";
import WhoJoin from "./WhoJoin";
function Courses() {
  return (
    <div className="">
      <JoinToday />
      <WhoJoin />
      <CourseOverview />
      <CourseModules />
    </div>
  );
}
export default Courses;
