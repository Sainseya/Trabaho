import axios from "axios";
import authHeader from "./auth-headers";
import AuthService from "./auth.service";


const API_URL = "http://localhost:8080/users/";


const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const getUserById = () => {
  const user = AuthService.getCurrentUser();
  if (user && user.id) {
    return axios.get(API_URL + user.id, { headers: authHeader() });
  } else {
    // Gérer le cas où l'ID de l'utilisateur n'est pas disponible
    // Vous pouvez renvoyer une promesse rejetée ou prendre une autre action appropriée.
    return Promise.reject(new Error("ID d'utilisateur non disponible"));
  }
};


const UserService = {
  getUserBoard,
  getAdminBoard,
  getUserById,
};

export default UserService;
