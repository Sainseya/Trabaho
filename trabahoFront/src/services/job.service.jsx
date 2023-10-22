import axios from "axios";
import authHeader from "./auth-headers";


const API_URL = "http://localhost:8080/jobs/";

const getJobs = () => {
    return axios.get(API_URL, { headers: authHeader() });
};


const UserService = {
    getJobs
};

export default UserService;
