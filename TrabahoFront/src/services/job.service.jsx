import axios from "axios";
import authHeader from "./auth-headers";


const API_URL = "http://localhost:8080/jobs/";

const updateUser = (userData, jobId) => {
    if (job && job.id) {
      return axios.put(API_URL + job.id, userData, { headers: authHeader() });
    } else {
      return Promise.reject(new Error("User ID not available"));
    }
  };


const UserService = {
    updateUser
};

export default UserService;
