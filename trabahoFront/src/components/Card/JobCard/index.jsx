import React, { useState } from "react";
import Card from "./card";
import { jobDetails } from "../../../Data/datas";
import JobDescription from "./JobDescription";

const JobCard = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [descriptionVisible, setDescriptionVisible] = useState(false);

  const handleJobSelection = (index) => {
    if (descriptionVisible && selectedJob === index) {
      setSelectedJob(null);
      setDescriptionVisible(false);
    } else {
      setSelectedJob(index);
      setDescriptionVisible(true);
    }
  };

  return (
    <div className="flex flex-row flex-wrap pl-80 gap-9 ">
      {jobDetails.map((company, companyId) =>
        company.jobs.map((job, jobId) => (
          <div key={jobId}>
            <Card
              job={job}
              company={company}
              onClick={() => handleJobSelection(companyId * 10 + jobId)} // Utilisation d'un identifiant unique pour chaque emploi
            />
            {selectedJob === companyId * 10 + jobId && descriptionVisible && (
              <JobDescription job={job} company={company} />
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default JobCard;

// {jobDetails.map((job, id) => (
//    <div key={id}>
//      <Card
//      job={job}
//      onClick={() => handleJobSelection(id)}
//      />
//      {selectedJob === id && (
//        <JobDescription job={job}/>
//      )}
//    </div>
//  ))}
