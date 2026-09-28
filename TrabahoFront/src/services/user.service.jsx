import axios from "axios";
import authHeader from "./auth-headers";
import AuthService from "./auth.service";


const API_URL = "http://localhost:8080/users/";


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

const updateUser = (userData) => {
  const user = AuthService.getCurrentUser();
  if (user && user.id) {
    return axios.put(API_URL + user.id, userData, { headers: authHeader() });
  } else {
    return Promise.reject(new Error("User ID not available"));
  }
};


const UserService = {
  getUserById,
  updateUser
};

export default UserService;
