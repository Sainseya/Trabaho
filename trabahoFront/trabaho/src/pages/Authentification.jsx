import React, { useState } from 'react';
import LoginForm from '../components/Autentification Form/LoginForm';
import RegisterForm from '../components/Autentification Form/RegisterForm';

const Authentification = () => {
   const [isPanelOpen, setIsPanelOpen] = useState(false);

   const togglePanel = () => {
      setIsPanelOpen(!isPanelOpen);
   };

   return (
      <div className="flex flex-row h-screen bg-white">
         <style>
            {`
          .panel-transition {
            transition: transform 0.3s ease;
          }

          .panel-open {
            transform: translateX(-100%);
          }

          .panel-closed {
            transform: translateX(0);
          }
        `}
         </style>

         <div id="left_Container" className="flex-1 my-8 ml-8">
            <div className="flex flex-col items-center justify-evenly h-full bg-[#e5ece9] rounded-l-2xl">
               <h2 className="mt-12 text-2xl">Welcome to Trabaho</h2>
               <RegisterForm />
               <div className="flex justify-center mb-12">
                  <p>
                     Already have a account ?{' '}
                     <a
                        href=""
                        onClick={(e) => {
                           e.preventDefault();
                           togglePanel();
                        }}
                        className="text-blue-600 hover:underline"
                     >
                        Login here
                     </a>
                  </p>
               </div>
            </div>
         </div>
         <div id="right_container" className="flex-1 my-8 mr-8 relative">
            <div
               className={`absolute h-full w-full z-10 bg-[#216869] ${
                  isPanelOpen ? '' : 'mr-8'
               } ${isPanelOpen ? 'rounded-l-2xl' : 'rounded-r-2xl'} ${
                  isPanelOpen ? 'panel-open' : 'panel-closed'
               } panel-transition`}
            ></div>
            <div className="flex flex-col items-center justify-evenly bg-[#e5ece9] h-full rounded-r-2xl">
               <h2 className="mt-12 text-2xl">Welcome back</h2>
               <LoginForm />
               <div className="flex justify-center mb-12">
                  <p>
                     Does not have a account ?{' '}
                     <a
                        href=""
                        onClick={(e) => {
                           e.preventDefault();
                           togglePanel();
                        }}
                        className="text-blue-600 hover:underline"
                     >
                        Sign in here
                     </a>
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Authentification;
