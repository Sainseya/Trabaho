import axios from 'axios';
import authHeader from "./auth-headers";

const API_URL = "http://localhost:8080/api/auth/"

const register = (username, email, password) => {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  };

  const login = (username, password) => {
    return axios
      .post(API_URL + "signin", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
  
        return response.data;
      });
  };

  const logout = () => {
    return axios
      .post(API_URL + "logout", {}, { headers: authHeader() })
      .catch(() => {
        //* Best-effort: still clear the local session even if the server call fails.
      })
      .finally(() => {
        localStorage.removeItem("user");
      });
  };
  

  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
  };

  export default AuthService;