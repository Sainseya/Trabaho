package com.example.trabaho.payload.request;

import jakarta.validation.constraints.NotNull;

public class JobsApplicationRequest {
    @NotNull
    private Long jobsId;

    public Long getJobsId() {
        return jobsId;
    }

    public void setJobsId(Long jobsId) {
        this.jobsId = jobsId;
    }
}
