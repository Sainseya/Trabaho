import axios from 'axios';
import authHeader from "../../../src/services/auth-headers";


const AxiosAPI = {
   //? POST Function
   post: async (url, data) => {
      try {
         const response = await axios.post(url, data);
         return response.data;
      } catch (error) {
         //* Gestion d'erreur
         throw error;
      }
   },

   //? GET Function
   get: async (url) => {
      try {
         const response = await axios.get(url, { headers: authHeader() });
         return response.data;
      } catch (error) {
         //* Gestion d'erreur
         throw error;
      }
   },

   //? UPDATE Function
   put: async (url, data) => {
      try {
         const response = await axios.put(url, data);
         return response.data;
      } catch (error) {
        //* Gestion d'erreur
         throw error;
      }
   },

   //? DELETE Function
   delete: async (url) => {
      try {
         const response = await axios.delete(url);
         return response.data;
      } catch (error) {
         //* Gestion d'erreur
         throw error;
      }
   },
};

export default AxiosAPI;
