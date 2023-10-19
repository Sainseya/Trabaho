import React, { useState, useEffect } from "react";
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

  //? Calculez la ligne en fonction de l'indice de l'offre d'emploi
  const getGridRow = () => {
    if (selectedJob) {
      if (window.innerWidth <= 1280) {
        return `${2 + Math.floor(selectedJob.jobId / 2)} / span 1`;
      } else {
        return `${2 + Math.floor(selectedJob.jobId / 3)} / span 1`;
      }
    }
  };

  return (
    <div className="lg:pl-80 flex-1 items-center gap-9">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {jobDetails.map((company, companyId) =>
          company.jobs.map((job, jobId) => (
            <div key={jobId} className="grid-item flex-1">
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
            className="col-start-1 xl:col-span-3 md:col-span-2 col-span-1 description-container"
            style={{ gridRow: getGridRow() }}
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
