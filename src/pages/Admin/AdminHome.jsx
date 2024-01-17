import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PaidIcon from "@mui/icons-material/Paid";
import SchoolIcon from "@mui/icons-material/School";
import Greeting from "../../components/time-message/Greeting";
import { useGetStatisticQuery } from "../../redux/features/statistic/statisticApi";
import Loader from "../../components/Loader/Loader";
const AdminHome = () => {
  const { data: statistic, isLoading } = useGetStatisticQuery();

  if (isLoading)
    return (
      <div>
        <Loader type={"AdminHome"} />
      </div>
    );

  return (
    <div>
      <Greeting />
      <div className="flex lg:flex-row flex-col justify-center items-center lg:mr-20  gap-4 mb-28 lg:mb-auto">
        <div className="card  w-72 h-36 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-red-500 flex justify-between">
              <span>Total Students :-</span> <PeopleOutlineIcon />
            </h2>
            <p className="text-xl font-semibold ms-1">
              {statistic?.data?.totalStudent}
            </p>
          </div>
        </div>
        <div className="card  w-72 h-36 bg-base-100 shadow-xl my-3 lg:my-auto">
          <div className="card-body">
            <h2 className="card-title text-blue-500 flex justify-between">
              <span>Total Income :-</span> <PaidIcon />
            </h2>
            <p className="text-xl font-semibold ms-1">
              <b>৳</b> {statistic?.data?.totalPaidAmount}
            </p>
          </div>
        </div>
        <div className="card  w-72 h-36 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-orange-500 flex justify-between">
              <span>Total Teachers :-</span> <SchoolIcon />
            </h2>
            <p className="text-xl font-semibold ms-1">
              {statistic?.data?.totalTeacher}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
