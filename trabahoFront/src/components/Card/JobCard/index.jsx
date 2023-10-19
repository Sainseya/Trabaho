import React, { useState } from "react";
import Card from "./Card";
import { jobDetails } from "../../../Data/datas";
import JobDescription from "./JobDescription";

const JobCard = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobSelection = (companyId, jobId) => {
    if (
      selectedJob &&
      selectedJob.companyId === companyId &&
      selectedJob.jobId === jobId
    ) {
      //? Si la même carte est cliquée de nouveau, masquez la description
      setSelectedJob(null);
    } else {
      setSelectedJob({ companyId, jobId });
    }
  };

  const getGridRow = () => {
    if (selectedJob) {
      //* Calculez la ligne en fonction de l'indice de l'offre d'emploi
      const row = 2 + Math.floor((selectedJob.jobId) / 3);
      return `${row} / span 1`;
    }
    return "2 / span 1"; //? Par défaut, affichez la description sur la seconde ligne
  };

  return (
    <div className="pl-80 gap-9">
      <div className="grid grid-cols-3 gap-4">
        {jobDetails.map((company, companyId) =>
          company.jobs.map((job, jobId) => (
            <div key={jobId} className="grid-item">
              <Card
                job={job}
                company={company}
                onClick={() => handleJobSelection(companyId, jobId)}
              />
            </div>
          ))
        )}
        {selectedJob !== null && (
          <div
            className="col-start-1 col-span-3 description-container"
            style={{ gridRow: getGridRow()}}
          >
            <JobDescription
              job={jobDetails[selectedJob.companyId].jobs[selectedJob.jobId]}
              company={jobDetails[selectedJob.companyId]}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default JobCard;
