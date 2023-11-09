import { Download } from "@mui/icons-material";
import { resultData } from "../../Dammydata";

const PublishedResult = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold p-7">Result Publish</h1>
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
            **Advance MS Office Application result is Published**Database
            Programming Course Result is published.
          </h1>
        </marquee>
        <div>
          <h1 className="text-2xl font-semibold my-3">
            Click or download the result using provided pdf url
          </h1>
          {resultData.map((result) => (
            <div key={result.id}>
              <ul>
                <li className="font-semibold text-[#4262a8]">
                  <a rel="noreferrer" href={result.pdfURL} target="_blank">
                    {result.examName} {result.published}{" "}
                    <Download className="bounce" />
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PublishedResult;
