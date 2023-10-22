import React, { useEffect, useState } from 'react';
import LoginForm from '../components/Autentification Form/LoginForm';
import RegisterForm from '../components/Autentification Form/RegisterForm';
import { usePanelOpen } from '../components/hooks/usePanelOpen';


const AuthentificationPC = ({ isMobile }) => {
   const [isPanelOpen, setIsPanelOpen] = useState(false);
   // const switchPanel = usePanelOpen((state) => state.switchOnLogin)

   const togglePanel = () => {
      setIsPanelOpen(!isPanelOpen)
   };

   return (

      <div className="flex flex-row h-screen bg-white">
         <div id="left_Container" className="flex-1 my-8 ml-8">
            <div className="flex flex-col items-center justify-evenly h-full bg-[#e5ece9] rounded-l-2xl">
               <h2 className="mt-12 text-2xl">Welcome to Trabaho</h2>
               <RegisterForm togglePanel={togglePanel} isMobile={isMobile} />
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
                  isPanelOpen ? 'translate-x-[-100%]' : 'translate-x-0'
               } transition-transform duration-300 ease-in-out`}
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

const AuthentificationMobile = ({ isMobile }) => {
   const [isPanelOpen, setIsPanelOpen] = useState(false);
   // const switchPan = usePanelOpen((state) => state.switchOnRegister)

   const switchPanel = () => {
      setIsPanelOpen(!isPanelOpen);
   };

   return (
      <div className="flex flex-col h-screen">
         <div id="top_container" className="flex basis-1/3">
            <div className="absolute h-full w-full -z-10 bg-[#216869]"></div>
         </div>
         <div id="bottom_container" className="flex flex-col basis-2/3">
            <div
               id="login_panel"
               className={`absolute w-full h-2/3 bottom-0 ${
                  isPanelOpen ? 'invisible' : 'visible'
               }`}
            >
               <div className="flex flex-col items-center justify-evenly bg-[#e5ece9] h-full w-full rounded-t-3xl">
                  <h2 className="mt-6 text-2xl">Welcome back</h2>
                  <LoginForm  />
                  <div className="flex justify-center mb-12"></div>
                  <div className="flex justify-center mb-6">
                     <p>
                        Does not have a account ?{' '}
                        <a
                           href=""
                           onClick={(e) => {
                              e.preventDefault();
                              switchPanel();
                           }}
                           className="text-blue-600 hover:underline"
                        >
                           Sign in here
                        </a>
                     </p>
                  </div>
               </div>
            </div>
            <div
               id="sign_in_panel"
               className={`absolute w-full h-2/3 z-10 bottom-0 ${
                  isPanelOpen ? 'visible' : 'invisible'
               }`}
            >
               <div className="flex flex-col items-center justify-evenly h-full bg-[#e5ece9] rounded-t-3xl">
                  <h2 className="mt-6 text-2xl">Welcome to Trabaho</h2>
                  <RegisterForm switchPanel={switchPanel} isMobile={isMobile}/>

                  <div className="flex justify-center mb-6">
                     <p>
                        Already have a account ?{' '}
                        <a
                           href=""
                           onClick={(e) => {
                              e.preventDefault();
                              switchPanel();
                           }}
                           className="text-blue-600 hover:underline"
                        >
                           Login here
                        </a>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );

}

const Authentification = () => {
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      const handleResize = () => {
         setIsMobile(window.innerWidth < 640);
      };

      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      };

   }, []);

   return (
      <div>
         {isMobile ? <AuthentificationMobile isMobile={isMobile}/> : <AuthentificationPC isMobile={isMobile}/>}
      </div>
   );
}

export default Authentification;
