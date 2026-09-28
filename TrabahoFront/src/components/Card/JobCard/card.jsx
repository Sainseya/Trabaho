import { HiLocationMarker } from "react-icons/hi";
import { TbReportMoney } from "react-icons/tb";
import Button from "../../Button";

const Card = ({ company, onClick }) => {

  return (
    <div className="flex flex-1 p-3 flex-col h-full justify-between gap-2 bg-white rounded-md shadow-lg">
      <div className="flex flex-row items-start justify-between border-b-2  pb-4">
        <div className="flex flex-row gap-4">
          <img
            className="object-fill w-24 h-16"
            src={""}
            alt={`logo ${""}`}
          />
          <div>
            <h2 className=" text-lg font-semibold">{company.title}</h2>
            <div className="flex flex-row flex-wrap">
              <span className="inline-block w-20 text-center font-semibold text-sm px-2 py-0.5 rounded-xl bg-blanc_creme text-emeraude mr-1 mb-1">
                {company.period}
              </span>
              <span className="inline-block w-20 text-center font-semibold text-sm px-2 py-0.5 rounded-xl bg-blanc_creme text-amber-700 mr-1 mb-1">
                {company.place}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-between">
          <div className="flex flex-row justify-start items-center gap-1">
            <HiLocationMarker />
            <p className="text-sm">{company.location}</p>
          </div>
          {/* <div className="flex flex-row items-center text-gray-500 gap-1">
            <HiLocationMarker />
            <p className="text-sm">{company.postHour} mins ago</p>
          </div> */}
        </div>
        <div className="flex flex-col h-full justify-between gap-2">
          <div className="flex flex-row justify-start items-center">
            <TbReportMoney />
            <p className="text-sm"> Salary : ${company.salary}/hr</p>
          </div>
          <Button
            name="Details"
            width={"fulls"}
            height={"3rem"}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
