import { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import AuthService from "../../services/auth.service";
import { toast, Toaster } from 'react-hot-toast';

const LoginForm = () => {
   let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
   const username = e.target.value;
   setUsername(username);
   };

 const onChangePassword = (e) => {
   const password = e.target.value;
   setPassword(password);
   };

   const handleLogin = (e) => {
      e.preventDefault();
        AuthService.login(username, password).then(
          () => {
            toast.success('Succès');
            navigate("/profil");
            window.location.reload();
          },
          (error) => {
            toast.error(`Name or password incorrect`);
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
            setMessage(resMessage);
          }
        );
    };
  

   return (
      <div>
      <Toaster />
      <form onSubmit={handleLogin} className="w-64 md:w-72 xl:w-96 mx-8">
         <div className="relative w-full mb-8 group">
            <input
               type="text"
               className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#d9dedc] appearance-none focus:outline-none focus:ring-0 focus:border-[#216869] peer"
               onChange={onChangeUsername}
               value={username}
               required
            />
            <label
               className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#216869] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
               Name
            </label>
         </div>
         <div className="relative w-full mb-12 group">
            <input
               type="password"
               className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#d9dedc] appearance-none focus:outline-none focus:ring-0 focus:border-[#216869] peer"
               onChange={onChangePassword}
               value={password}
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
               Login
            </button>
         </div>
      </form>
      </div>
   );
};

export default LoginForm;
