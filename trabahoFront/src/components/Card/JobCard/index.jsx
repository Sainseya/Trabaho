import React, { useState } from "react";
import Card from "./card";
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

  return (
    <div className="pl-80 gap-9">
      <div className="grid grid-cols-3 gap-4">
        {jobDetails.map((company, companyId) =>
          company.jobs.map((job, jobId) => (
            <div className="" key={jobId}>
              <Card
                job={job}
                company={company}
                onClick={() => handleJobSelection(companyId, jobId)}
              />
              {selectedJob &&
                selectedJob.companyId === companyId &&
                selectedJob.jobId === jobId && (
                  <div className="col-span-3">
                    <JobDescription
                      job={
                        jobDetails[selectedJob.companyId].jobs[
                          selectedJob.jobId
                        ]
                      }
                      company={jobDetails[selectedJob.companyId]}
                    />
                  </div>
                )}
            </div>
          ))
          
        )}
      </div>
    </div>
  );
};

export default JobCard;
