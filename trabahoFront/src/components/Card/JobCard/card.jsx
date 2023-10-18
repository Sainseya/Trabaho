import { HiLocationMarker } from "react-icons/hi";
import { TbReportMoney } from "react-icons/tb";
import Button from "../../Button";

const Card = ({ job, company, onClick }) => {
  return (
    <div>
      <div className="flex p-3 flex-col w-80 h-46 bg-white rounded-md shadow-lg">
        <div className="flex flex-row items-start justify-between border-b-2 h-[50%] pb-4">
          <div className="flex flex-row gap-4">
            <img
              className="object-fill w-24 h-16"
              src={company.logo}
              alt={`logo ${company.name}`}
            />
            <div>
              <h2 className="font-semibold">{company.name}</h2>
              <div className="flex flex-row gap-2">
                <p className="text-sm font-bold text-emeraude">{job.periode}</p>
                <p className="text-sm font-bold text-amber-700">{job.where}</p>
              </div>
            </div>
          </div>
          <div className="hover:bg-gray-300">
            {/* Ajoutez ici le contenu du composant à afficher au survol */}
          </div>
        </div>

        <div className="flex flex-row justify-between pt-1">
          <div className="flex flex-col gap-5">
            <div className="flex flex-row justify-start items-center gap-1">
              <HiLocationMarker />
              <p>{job.localization}</p>
            </div>
            <div className="flex flex-row items-center text-gray-500 gap-1">
              <HiLocationMarker />
              <p>{job.postHour} mins ago</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-row justify-start items-center">
              <TbReportMoney />
              <p className=""> Salary : ${job.salary}/hr</p>
            </div>
            <Button
              name="Details"
              width={"fulls"}
              height={"3rem"}
              onClick={onClick} // Assurez-vous d'ajuster cette partie en fonction de votre logique
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
