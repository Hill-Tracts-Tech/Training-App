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
      <div className="flex lg:flex-row flex-col justify-center items-center lg:mr-20  gap-4">
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

/* 
 <div className="bg-base-100 shadow-xl lg:mr-20  mt-6 lg:ms-5 px-5 lg:px-0">
        <h1 className="text-xl font-semibold">Available Courses :-</h1>
        <div className="overflow-x-auto">
          <table className="table rounded-xl">
            <thead>
              <tr className="bg-gray-300">
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Brice Swyre</div>
                      <div className="text-sm opacity-50">China</div>
                    </div>
                  </div>
                </td>
                <td>
                  Carroll Group
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Tax Accountant
                  </span>
                </td>
                <td>Red</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Marjy Ferencz</div>
                      <div className="text-sm opacity-50">Russia</div>
                    </div>
                  </div>
                </td>
                <td>
                  Rowe-Schoen
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Office Assistant I
                  </span>
                </td>
                <td>Crimson</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Yancy Tear</div>
                      <div className="text-sm opacity-50">Brazil</div>
                    </div>
                  </div>
                </td>
                <td>
                  Wyman-Ledner
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Community Outreach Specialist
                  </span>
                </td>
                <td>Indigo</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

*/
