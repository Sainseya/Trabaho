import React, { useState } from "react";
import Card from "./card";
import { jobDetails } from "../../../Data/datas";
import JobDescription from "./JobDescription";
import jobService from "../../../services/job.service";
import get from '../../API/get';



const JobCard = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const data = get();
  const { jobs } = data;

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
      if (window.innerWidth <= 768) {
        return `${selectedJob.jobId + 2} / span 1`; //? S'il y a 1 colonne
      } 
      else if (window.innerWidth <= 1280) {
        return `${2 + Math.floor(selectedJob.jobId / 2)} / span 1`; //? S'il y a 2 colonnes
      } 
      else {
        return `${2 + Math.floor(selectedJob.jobId / 3)} / span 1`; //? S'il y a 3 colonnes
      }
    }
  };

  return (
    <div className="lg:pl-64 xl:pl-80 flex-1 items-center gap-9">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {jobs.map((company, companyId) =>
            <div key={companyId} className="grid-item flex-1">
              <Card
                company={company}
                onClick={() => handleJobSelection(companyId, companyId)}
              />
            </div>
        )}
        {selectedJob !== null && (
          <div
            className="col-start-1 xl:col-span-3 md:col-span-2 col-span-1 description-container"
            style={{ gridRow: getGridRow() }}
          >
            <JobDescription
              job={jobs[selectedJob.companyId]}
              company={jobs[selectedJob.companyId]}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default JobCard;
