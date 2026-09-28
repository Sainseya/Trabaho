import { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import AuthService from "../../services/auth.service";
import { toast, Toaster } from 'react-hot-toast';
import { usePanelOpen } from '../hooks/usePanelOpen';


const RegisterForm = ({ togglePanel, switchPanel, isMobile }) => {

  let navigate = useNavigate();

//   const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

   const onChangeUsername = (e) => {
      const username = e.target.value;
      setUsername(username);
   };

   const onChangeEmail = (e) => {
      const email = e.target.value;
      setEmail(email);
    };

   const onChangePassword = (e) => {
      const password = e.target.value;
      setPassword(password);
   };

   const handleRegister = (e) => {
      e.preventDefault();
  
      AuthService.register(username, email, password)
      .then((response) => {
        if (response.status === 200) {
          toast.success('Succès');
          if(isMobile){
            switchPanel(); //*Go to login for mobile
         } else {
            togglePanel(); //*Go to login for PC
         }
      }})
      .catch((error) => {
         // setIsPanelOpen(true);
        toast.error(`Une erreur s'est produite`);
      });


    };
   

      return (
         <div>
            <Toaster />
         <form onSubmit={handleRegister} className="w-64 md:w-72 xl:w-96 md:xl:mx-8">
         <div className="relative w-full mb-8 group">
               <input
                  type="text"
                  className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#d9dedc] appearance-none focus:outline-none focus:ring-0 focus:border-[#216869] peer"
                  value={username}
                  onChange={onChangeUsername}
                  required
               />
               <label
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#216869] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
               >
                  First Name
               </label>
            </div>
            <div className="relative w-full mb-8 group">
               <input
                  type="email"
                  name="email"
                  id="floating_email_register"
                  className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#d9dedc] appearance-none focus:outline-none focus:ring-0 focus:border-[#216869] peer"
                  value={email}
                  onChange={onChangeEmail}
                  required
               />
               <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#216869] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
               >
                  Email address
               </label>
            </div>
            <div className="relative w-full mb-8 group">
               <input
                  type="password"
                  name="password"
                  id="floating_password_register"
                  className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#d9dedc] appearance-none focus:outline-none focus:ring-0 focus:border-[#216869] peer"
                  value={password}
                  onChange={onChangePassword}
                  required
               />
               <label
                  htmlFor="floating_password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#216869] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
               >
                  Password
               </label>
            </div>

            <div className="flex justify-center mb-8">
               <button
                  type="submit"
                  className="w-full text-white bg-[#28c27a] hover:bg-[#59a96a] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
               >
                  Register new account
               </button>
            </div>
         </form>
         </div>
      );
   
}

export default RegisterForm;
