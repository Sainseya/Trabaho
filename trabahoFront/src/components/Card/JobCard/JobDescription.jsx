import Button from "../../Button";

const JobDescription = ({ job, company }) => {
  return (
    <div className="description-card flex flex-row w-full bg-white rounded-md shadow-lg mt-4 p-3">
      <div id="left" className="flex-1 pr-2">
        <div className="flex flex-col items-start justify-between h-[35%] pb-4">
          <div className="flex flex-row gap-4 mb-2">
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
          <div className="">
            <p className="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
              consequatur vitae quos rerum facilis 
              accusantium in placeat cum voluptatum dolores, totam,
              accusantium in placeat cum voluptatum ullam aliquam. Libero,
            </p>
          </div>
        </div>
      </div>
      <div id="right" className="flex-1 flex-col pl-2">
        <div className="flex flex-row justify-between items-center mb-6">
          <p className="text-lg font-bold">Missions :</p>
          <Button name="Apply" width={"6rem"} height={"3rem"} onClick={""} />
        </div>
        <div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quam
            iusto veniam soluta aut laboriosam quidem suscipit unde beatae
            quisquam rem provident fuga fugiat, voluptas ex. Adipisci
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
