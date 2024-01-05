import { Download } from "@mui/icons-material";
import moment from "moment";
import { useGetResultQuery } from "../../redux/features/result/resultApi";

const PublishedResult = () => {
  const { data: resultData } = useGetResultQuery();
  return (
    <div>
      <h1 className="text-3xl font-semibold p-7">Check Result</h1>
      {resultData?.data ? (
        <p className="text-center text-2xl bg-yellow-200 my-8">
          No Result Published
        </p>
      ) : (
        <div className="shadow-md p-7 rounded-md">
          <marquee
            direction="left"
            height="40"
            width="400"
            onMouseOver={(e) => e.target.stop()}
            onMouseOut={(e) => e.target.start()}
            className="w-full border flex justify-center items-center text-[#4262a8] font-semibold text-xl"
          >
            <h1>
              {resultData?.data[0]?.courseName} result published at{" "}
              {moment(resultData?.data[0]?.createdAt).format("LLLL")}
            </h1>
          </marquee>
          <div>
            <h1 className="text-2xl font-semibold my-3">
              Click or download the result using provided pdf url
            </h1>
            {resultData?.data?.map((result) => (
              <div key={result._id}>
                <ul>
                  <li className="font-semibold text-[#4262a8]">
                    <a
                      href={`${import.meta.env.VITE_APP_IMAGE_URL}/result/${
                        result?.file
                      }`}
                      target="_blank"
                      className="cursor-pointer hover:underline"
                      rel="noreferrer"
                    >
                      {result.courseName} - {result.batchNo} -{" "}
                      {moment(result?.createdAt).format("LL")}
                      <Download className="bounce" />
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PublishedResult;
