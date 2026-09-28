import axios from 'axios';
import authHeader from "../../../src/services/auth-headers";

let refreshPromise = null;

const refreshAccessToken = async () => {
   const user = JSON.parse(localStorage.getItem('user'));
   if (!user || !user.refreshToken) {
      throw new Error('No refresh token available');
   }

   if (!refreshPromise) {
      refreshPromise = axios
         .post('http://localhost:8080/api/auth/refreshtoken', { refreshToken: user.refreshToken })
         .then((response) => {
            const updatedUser = { ...user, accessToken: response.data.accessToken };
            localStorage.setItem('user', JSON.stringify(updatedUser));
            return response.data.accessToken;
         })
         .finally(() => {
            refreshPromise = null;
         });
   }

   return refreshPromise;
};

//? Wraps a request function so a single 401 triggers one token refresh + retry.
const withAuthRetry = async (requestFn) => {
   try {
      const response = await requestFn(authHeader());
      return response.data;
   } catch (error) {
      if (error.response && error.response.status === 401) {
         try {
            await refreshAccessToken();
            const response = await requestFn(authHeader());
            return response.data;
         } catch (refreshError) {
            localStorage.removeItem('user');
            throw refreshError;
         }
      }
      throw error;
   }
};

const AxiosAPI = {
   //? POST Function
   post: (url, data) => withAuthRetry((headers) => axios.post(url, data, { headers })),

   //? GET Function
   get: (url) => withAuthRetry((headers) => axios.get(url, { headers })),

   //? UPDATE Function
   put: (url, data) => withAuthRetry((headers) => axios.put(url, data, { headers })),

   //? DELETE Function
   delete: (url) => withAuthRetry((headers) => axios.delete(url, { headers })),
};

export default AxiosAPI;
