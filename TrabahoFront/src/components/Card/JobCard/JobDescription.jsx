import Button from "../../Button";
import ApplyForJob from "./ApplyForJob";
import React, { useState } from "react";

const JobDescription = ({ job, company }) => {
  const [applyJob, setApplyJob] = useState(false);

  const handleButtonClick = () => {
    setApplyJob(true);
  };

  const handleApplyJobClose = () => {
    setApplyJob(false);
  };

  return (
    <div className="description-card flex flex-col sm:flex-row w-full bg-white rounded-md shadow-lg p-3">
      <div id="left" className="flex-1 pr-2">
        <div className="flex flex-col items-start justify-between h-[35%] pb-4">
          <div className="flex flex-row gap-4 mb-2">
            <img
              className="object-fill w-24 h-16"
              src={company.logo}
              alt={`logo ${company.name}`}
            />
            <div>
              <h2 className="text-lg font-semibold">{job.role}</h2>
              <div className="flex flex-row flex-warp">
                <span className="inline-block w-20 text-center font-semibold text-sm px-2 py-0.5 rounded-xl bg-blanc_creme text-emeraude mr-1 mb-1">
                  {job.period}
                </span>
                <span className="inline-block w-20 text-center font-semibold text-sm px-2 py-0.5 rounded-xl bg-blanc_creme text-amber-700 mr-1 mb-1">
                  {job.place}
                </span>
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-sm">{job.description}</p>
          </div>
        </div>
      </div>
      <div id="right" className="flex-1 flex-col pl-2">
        <div className="flex flex-row justify-between items-start mb-6">
          <p className="text-lg font-bold">Missions :</p>
          <Button name="Apply" width="6rem" height="3rem" onClick={handleButtonClick} />
        </div>
        <div>
          <p className="text-sm">{job.expectation}</p>
        </div>
      </div>
      {applyJob && <ApplyForJob onClose={handleApplyJobClose} />}
    </div>
  );
};

export default JobDescription;
